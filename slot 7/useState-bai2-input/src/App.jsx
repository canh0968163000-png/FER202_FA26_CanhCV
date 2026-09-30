import { useState } from 'react'

function App() {
  const [text, setText] = useState('')

  const handleChange = (event) => {
    setText(event.target.value)
  }

  return (
    <div>
      <h1>Controlled Input Field</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>{text}</p>
    </div>
  )
}

export default App
