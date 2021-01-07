import React, {useState} from 'react'

const TodoForm = () => {
  const [input, setInput] = useState('');
  
  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
   setInput('');
    }
  

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Add a todo"
          className="todo-input"
          name="text"
          onChange={handleChange}
        />
        <button className="todo-button">Add Todo</button>
    </form>
  )
}

export default TodoForm;