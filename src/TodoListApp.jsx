import React, { useEffect, useState } from 'react'
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

const TODOS_STORAGE_KEY = "todos"

function TodoListApp() {

	function initTodos() {
		const savedTodos = localStorage.getItem(TODOS_STORAGE_KEY)

		return savedTodos ? JSON.parse(savedTodos) : []
	}

	const [todos, setTodos] = useState(initTodos);

	// todos 변경될 때, 저장하자, useEffect(명령어, [변할값])
	useEffect(() => {
		// localStorage에 todos 저장하자
		localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
	}, [todos])


	function addTodo(text) {
		// 이전 todo 가져오기
		// 하나씩 꺼내서 새로운 리스트 만들기
		// 뒤에 new todo 만들어서 추가하기

		setTodos((todos) => [...todos, new Todo(text)])

	}

function toggleTodo(id) {
	// todos에서 하나씩 꺼내어 todo의 id가 id와 같으면, !이전 isCompleted
	setTodos((todos) =>
		todos.map((todo) => 
			todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
		)
	)
}

function deleteTodo(id) {
	// todos에서 하나씩 꺼내어 todo의 id가 id와 같지 않은 것들만 남기기
	setTodos((todos) => 
		todos.filter((todo) => 
			todo.id !== id
		)
	)
}

function editTodo(id, newText) {
	//todos에서 하나씩 꺼내어 todo. id가 같으면 text를 newText로 대치하자
	setTodos((todos) => 
		todos.map((todo) => todo.id === id ? {...todo, text: newText} : todo)
	)
}

	return (
		<div className='todo'>
			<TodoHeader />
			<TodoAdder addTodo={addTodo}/>

			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
		</div>
	)
}

export default TodoListApp