import { selectedTodo, deleteTodo, deleteSelectedTodo, addTodo } from './redux/actions'
import store from './redux/store'

import './static/styles/index.css'

const body = document.querySelector('.todo-body')
const addBtn = document.querySelector('.add')
const textInput = document.querySelector('.text-input')
const deleteSelectedBtn = document.querySelector('.delete-selected')

function createTodoHTML(index, text, selected) {
  return `
    <div class="row">
      <div class="col">
        <div class="row todo">
          <label class="label" for="checkbox"><input class="toggle" type="checkbox" name="checkbox" ${
            selected && 'checked'
          }></label>
          <input class="input" type="text" value="${index}. ${text}" disabled>
          <div class="trash">
            <div class="back"></div>
          </div>
        </div>
      </div>
    </div>`
}

function renderTodo() {
  const todos = store.getState().todos

  if (!todos.length) {
    body.innerHTML = '<h2 class="clear-todo">Todo list clear...</h2>'
    return
  }
  body.innerHTML = ''
  todos.forEach((todo, index) => {
    body.insertAdjacentHTML('afterbegin', createTodoHTML(index, todo.text, todo.selected))

    body.querySelector('.back').addEventListener('click', () => {
      store.dispatch(deleteTodo(todo))
    })

    body.querySelector('.toggle').addEventListener('change', () => {
      store.dispatch(selectedTodo(todo))
    })
  })
}

store.subscribe(renderTodo)

renderTodo()

addBtn.addEventListener('click', () => {
  textInput.value && store.dispatch(addTodo(textInput.value))

  textInput.value = ''
})

deleteSelectedBtn.addEventListener('click', () => {
  store.dispatch(deleteSelectedTodo())
})
