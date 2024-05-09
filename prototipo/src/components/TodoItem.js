import React from 'react';
 
function TodoItem({ todo, onDelete }) {
  return (
    <li>
      {todo}
      <button onClick={onDelete}>Eliminar</button>
    </li>
  );
}
 
export default TodoItem;
