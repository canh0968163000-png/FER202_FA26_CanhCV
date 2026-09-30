import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleAddTodo = (event) => {
    event.preventDefault()

    const newTodo = todo.trim()

    if (newTodo === '') {
      return
    }

    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: Date.now(),
        text: newTodo,
      },
    ])

    setTodo('')
  }

  const handleDeleteTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.filter((item) => item.id !== id)
    )
  }

  return (
    <div>
      <h1>Todo List</h1>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          placeholder="Enter a todo"
        />

        <button type="submit">
          Add
        </button>
      </form>

      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.text}

            <button
              type="button"
              onClick={() => handleDeleteTodo(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
