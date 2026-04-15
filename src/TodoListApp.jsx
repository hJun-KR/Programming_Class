import React from 'react'
import'./todolist.css'
import TodoItemEmpty from './components/TodoItemEmpty'
import Button from './components/Button'
import CheckBox from './components/CheckBox'
import TodoHeader from './components/TodoHeader'
import TodoAdder from './components/TodoAdder'

function TodoListApp() {
  return (
  	<div className='todo'>
		
			<TodoHeader />
			<TodoAdder />

			<ul className='todo__list'>
				<TodoItemEmpty />

				<li className='todo__item todo__item--complete'>
					<CheckBox id="1">지각하기</CheckBox>
					<Button type="button" className='todo__button todo__button--edit'>✏️</Button>
					<Button type="button" className='todo__button todo__button--delete'>❌</Button>
				</li>				
			</ul> 
    </div>
	)
}

export default TodoListApp