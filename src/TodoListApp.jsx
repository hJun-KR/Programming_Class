import React from 'react'
import'./todolist.css'
import TodoHeader from './components/TodoHeader'
import TodoAdder from './components/TodoAdder'
import TodoList from './components/TodoList'

function TodoListApp() {
  return (
  	<div className='todo'>
			<TodoHeader />
			<TodoAdder />

			<TodoList />
    </div>
	)
}

export default TodoListApp