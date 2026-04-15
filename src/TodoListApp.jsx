import React from 'react'
import'./todolist.css'
import TodoItemEmpty from './components/TodoItemEmpty'
import Button from './components/Button'
import CheckBox from './components/CheckBox'

function TodoListApp() {
  return (
  	<div className='todo'>
			<h1 className='todo__title'>HyeonDo List</h1>
			<form className='todo__form'>
				<input type="text" className='todo__input'  placeholder='할 일을 입력하세요.'/>
				<Button type="submit" className='todo__button todo__button--add'>Add</Button>
			</form>
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