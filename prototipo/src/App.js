import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
 

function App() {
  const [todos, setTodos] = useState([]);
  
  // Cargar datos del localStorage al iniciar la aplicación
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);
 
  const handleAddTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };
 
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };
 
  return (
    <div>
      <Header />
          
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
     
    </div>
  );
}
 
export default App;
