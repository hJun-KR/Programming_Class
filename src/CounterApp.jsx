import { useState } from 'react'
// import './App.css'

function CounterApp() {
  // count : 상태 값, 이전 상태 값
  // setCount() : 상태를 바꾸는 함수, 반드시 애로 바꿔야 함
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => setCount((count) => count + 1)}>+</button>
    <button onClick={() => setCount((count) => count + 2)}>+2</button>
    <button onClick={() => setCount((count) => count - 1)}>-</button>
      {/* <button
        className="counter"
        onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button> */}
    </>
  )
}

export default CounterApp