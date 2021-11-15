/* Ny implementation of redux library */
export default class Redux {
  static createStore(rootReducer, initialState) {
    let state = rootReducer(initialState, { type: 'INIT' })
    let subscribers = []

    return {
      getState() {
        return state
      },
      dispatch(action) {
        state = rootReducer(state, action)

        subscribers.forEach(subscriber => subscriber())

        return action
      },
      subscribe(listener) {
        subscribers.push(listener)
        return () => {
          subscribers = subscribers.filter(subscriber => listener !== subscriber)
        }
      },
    }
  }

  static combineReducers(reducers) {
    return (state, action) => {
      const nextState = {}

      Object.entries(reducers).forEach(([key, reducer]) => {
        nextState[key] = reducer(state[key], action)
      })

      return nextState
    }
  }
}

