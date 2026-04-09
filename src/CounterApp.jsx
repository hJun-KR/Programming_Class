// https://programming.hjun-kr.workers.dev/
import { useState } from 'react'
// import './App.css'

function CounterApp() {
  // count : 상태 값, 이전 상태 값
  // setCount() : 상태를 바꾸는 함수, 반드시 애로 바꿔야 함
  const [count, setCount] = useState(0)
function plusMax10() {
  setCount((count) => {
    if (count >= 10) {
      return 10;
    }
    return count + 1;
  });
}


  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => setCount((count) => count + 1)}>+</button>
    <button onClick={() => setCount((count) => count + 2)}>+2</button>
    <button onClick={() => setCount((count) => count - 1)}>-</button>
    <button onClick={() => setCount(0)}>reset</button>
    <button onClick={() => setCount((count) => count >= 10 ? count : ++count)}>+(최대 10까지)</button>
    <button onClick={() => setCount((count) => Math.min(count + 1 , 10))}>+(최대 10까지)</button>
    <button onClick={plusMax10}>+(최대 10까지)</button>


      {/* <button
        className="counter"
        onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button> */}
    </>
  )
}

export default CounterApp