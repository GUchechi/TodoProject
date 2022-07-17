import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1;
    }
  let todo = {id: id, text: text, completed: false}
  let newTodos = [todo, ...todos]
  setTodos(newTodos)
  }
  // REMOVE TODO
  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos)
  }
//  COMPLETED TODO
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    setTodos(updatedTodos)
  }
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo = {addTodo} />
      <hr className='separator'/>
      {todos.map((todo) => {
        return (
          <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} todo ={todo} key={todo.id}/> 
        )
      })}
    </div>
  );
}

export default App;
