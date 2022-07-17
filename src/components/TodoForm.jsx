import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [input, setInput] = useState("");
    const onChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(input);
        setInput("")
        
    } 
  
    return (
   <form onSubmit={handleSubmit} action="" className="todo-form">
    <input value={input} onChange={onChange} type="text" className="todo-input" placeholder='Add a todo' />
    <button type='submit' className="todo-button ">Add Todo</button>
   </form>
  )
}

export default TodoForm