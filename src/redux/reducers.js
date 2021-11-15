import { ADD, SELECTED, DELETE, DELETE_SELECTED } from './actions'

const initStateTodo = {
  todos: [],
}

function todo(state = initStateTodo, action) {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            text: action.payload.text,
            selected: false,
          },
        ],
      }
    }
    case DELETE: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      }
    }
    case SELECTED: {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? {
                ...todo,
                selected: !todo.selected,
              }
            : todo
        ),
      }
    }
    case DELETE_SELECTED: {
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.selected)
      }
    }
    default:
      return state
  }
}

export default todo
