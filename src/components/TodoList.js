import React from 'react';
import TodoItem from './TodoItem';
 
function TodoList({ todos, onDelete, onEdit }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onDelete={() => onDelete(index)} onEdit={(newText) => onEdit(index, newText)}/>
      ))}
    </ul>
  );
}
 
export default TodoList;
