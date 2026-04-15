import React from 'react'
import CheckBox from './CheckBox'
import Button from './Button'

function TodoItem() {
    return (
        <li className='todo__item todo__item--complete'>
            <CheckBox id="1">지각하기</CheckBox>
            <Button type="button" className='todo__button todo__button--edit'>✏️</Button>
            <Button type="button" className='todo__button todo__button--delete'>❌</Button>
        </li>
    )
}

export default TodoItem