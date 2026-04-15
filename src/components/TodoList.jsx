import React from 'react'
import TodoItemEmpty from './TodoItemEmpty'
import TodoItem from './TodoItem'

function TodoList() {
    return (
        <ul className='todo__list'>
            <TodoItemEmpty />
            <TodoItem />
        </ul>
    )
}

export default TodoList