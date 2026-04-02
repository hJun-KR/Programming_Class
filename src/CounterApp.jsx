import { useState } from 'react'
// import './App.css'

function CounterApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button
        className="counter"
        onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
    </>
  )
}

export default CounterApp
