import React from 'react'
import { useState } from 'react'
import CounterApp from './CounterApp'
import TodoListApp from './TodoListApp'

function ButtonPageApp({ setPage }) {
    return (
        <>
            <h1>App 목록</h1>
            <ul>
                <li>
                    <button
                        style={{
                            width: '100px',
                            height: '100px',
                            fontSize: '2rem'
                        }}
                        onClick={() => setPage('counterapp')}
                    >📆</button>
                </li>
                <li>
                    <button
                        style={{
                            width: '100px',
                            height: '100px',
                            fontSize: '2rem'
                        }}
                        onClick={() => setPage('todolistapp')}
                    >📋</button>
                </li>
            </ul>
        </>
    );
}

function BackPage() { }

function HomeApp() {
    const [page, setPage] = useState('home') // 'home', 'counterapp', 'todolistapp'
    return (
        <>
            {/* // home일 떄 CounterApp, TodoListApp 링크 페이지 보여주자 */}
            {page === 'home' && <ButtonPageApp setPage={setPage} />}
            {/* // home이 아니면 home 버튼 보여주자 */}
            {page !== 'home' && <button
                style={{
                    fontSize: '1.5rem',
                    position: 'fixed',
                    left: '10px',
                    bottom: '10px',
                    cursor: 'pointer',
                    borderRadius: '8px 12px',
                    backgroundColor: '#eee',
                    border: 'none'
                }}
                onClick={() => setPage('home')}
            >🏡홈이나 가자</button>}
            {/* // counterapp일 때 CounterApp 보여주자 */}
            {page === 'counterapp' && <CounterApp />}
            {/* // todolistapp일 때 TodoListApp 보여주자 */}
            {page === 'todolistapp' && <TodoListApp />}

        </>
    )
}

export default HomeApp