import React from 'react'
import CheckBox from './CheckBox'
import Button from './Button'

function TodoItem({ todo, toggleTodo }) {
    return (
        // todo.isCompleted가 참이면 "todo__item--complete" 아니면 ""
        <li className={`todo__item ${todo.isCompleted ? " todo__item--complete" : ""}`}>
            <CheckBox
                id={todo.id}
                onChange={() => toggleTodo(todo.id)}
            >
                {todo.text}
            </CheckBox>
            <Button type="button" className='todo__button todo__button--edit'>✏️</Button>
            <Button type="button" className='todo__button todo__button--delete'>❌</Button>
        </li>
    )
}

export default TodoItem