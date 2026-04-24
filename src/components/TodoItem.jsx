import React, { useState } from 'react'
import CheckBox from './CheckBox'
import Button from './Button'

function TodoItem({ todo, ...rest }) {
    // isEditing: 수정중인지 아닌지
    const [isEditing, setIsEditing] = useState(false);
    // editText: 수정중인 text
    const [editText, setEditText] = useState(todo.text);
    function handleEditClick() {
        // 수정중이 아니면 -> 수정중. <input />
        if (!isEditing) {
            setIsEditing(true);
            setEditText(todo.text);
        }
        // 수정중이면 -> 수정중이 아님. <checkbox />
        else {
            const trimmedText = editText.trim();

            if (trimmedText !== "" && trimmedText !== todo.text) { // 빈칸이 아니고, 이전 text와 다르면
                rest.editTodo(todo.id, trimmedText);
            }
            setIsEditing(false);

        }
    }


    return (
        // todo.isCompleted가 참이면 "todo__item--complete" 아니면 ""
        <li className={`todo__item ${todo.isCompleted ? " todo__item--complete" : ""}`}>
            {/* 수정중이 아니면 */}
            {!isEditing &&
                <CheckBox
                    id={todo.id}
                    onChange={() => rest.toggleTodo(todo.id)}
                >
                    {todo.text}
                </CheckBox>
            }
            {/* 수정중이면 */}
            {isEditing &&
                <input
                    type="text"
                    className="todo__input--edit"
                    onChange={(e) => setEditText(e.target.value)}
                    value={editText}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleEditClick();
                        }
                    }}
                    autoFocus
                />
            }

            <Button type="button" className='todo__button todo__button--edit'
                onClick={handleEditClick}
            >
                {isEditing ? "💾" : "✏️"}
            </Button>
            <Button type="button" className='todo__button todo__button--delete'
                onClick={() => rest.deleteTodo(todo.id)}
            >
                ❌
            </Button>
        </li>
    )
}

export default TodoItem