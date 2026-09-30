import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((current) => current + 1)
  }

  return (
    <div>
      <h1>Simple Counter</h1>
      <p>Current count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default App
