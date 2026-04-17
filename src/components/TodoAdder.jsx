import React, { useState } from 'react'
import Button from './Button'

function TodoAdder({ addTodo }) {
    const [inputTodo, setInputTodo] = useState('')

    function handleSubmit(event) {
        // 사용자가 입력하는 것은 항상 주의 필요!!
        // 사용자 입력 : user's way

        if(!inputTodo.trim()) return;

        event.preventDefault(); // submit 기본 동작 막기
        // addTodo(text)
        // text: 1. input 요소의 value, 2. input value를 state
        addTodo(inputTodo.trim())
        setInputTodo('')
    }

    return (
        <>
            <form className='todo__form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    className='todo__input'
                    placeholder='할 일을 입력하세요.'
                    value={inputTodo}
                    onChange={(e) => setInputTodo(e.target.value)} />
                <Button type="submit" className='todo__button todo__button--add'>Add</Button>
            </form>
        </>
    )
}

export default TodoAdder
