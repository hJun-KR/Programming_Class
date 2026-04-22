import React from 'react'
import TodoItemEmpty from './TodoItemEmpty'
import TodoItem from './TodoItem'

function TodoList({ todos }) {
    return (
        <ul className='todo__list'>
            {/* 아무것도 없을 때,  */}
            {todos.length === 0 &&  <TodoItemEmpty />}
            {/* 아무것도 없지 않을 때 */}
            { todos.length > 0 && todos.map((todo) => 
                <TodoItem key={todo.id} todo={todo}/>
            )}
        </ul>
    )
}

export default TodoList