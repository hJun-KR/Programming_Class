import React, { useState } from 'react'
import './todolist.css'
import TodoHeader from './components/TodoHeader'
import TodoAdder from './components/TodoAdder'
import TodoList from './components/TodoList'

class Todo {
	constructor(text) {
		this.id = Date.now(); // id: 고유의 값, new Date().getTime()
		this.text = text; // 할일 내용
		this.isCompleted = false; // 완료 여부: 미완
	}
}

function TodoListApp() {
	const [todos, setTodos] = useState([]);

	function addTodo(text) {
		// 이전 todo 가져오기
		// 하나씩 꺼내서 새로운 리스트 만들기
		// 뒤에 new todo 만들어서 추가하기

		setTodos((todos) => [...todos, new Todo(text)])

	}



	return (
		<div className='todo'>
			<TodoHeader />
			<TodoAdder addTodo={addTodo}/>

			<TodoList todos={todos}/>
		</div>
	)
}

export default TodoListApp