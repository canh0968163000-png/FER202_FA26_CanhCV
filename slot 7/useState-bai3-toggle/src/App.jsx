import { useState } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggle = () => {
    setIsVisible((current) => !current)
  }

  return (
    <div>
      <h1>Toggle Visibility</h1>

      <button onClick={handleToggle}>
        {isVisible ? 'Hide' : 'Show'}
      </button>

      {isVisible && (
        <p>
          This is the text that can be shown or hidden.
        </p>
      )}
    </div>
  )
}

export default App
