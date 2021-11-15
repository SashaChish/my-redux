export const ADD = 'ADD'
export const SELECTED = 'SELECTED'
export const DELETE = 'DELETE'
export const DELETE_SELECTED = 'DELETE_SELECTED'

export const addTodo = (text) => {
  return {
    type: ADD,
    payload: {
			text
		},
  }
}

export const selectedTodo = ({ id }) => {
  return {
    type: SELECTED,
    payload: {
      id,
    },
  }
}

export const deleteTodo = ({ id }) => {
  return {
    type: DELETE,
    payload: {
      id,
    },
  }
}

export const deleteSelectedTodo = () => {
  return {
    type: DELETE_SELECTED,
  }
}
