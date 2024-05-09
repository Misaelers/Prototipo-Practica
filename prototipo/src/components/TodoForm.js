import React, { useState, useEffect } from 'react';
 
function TodoForm({ onAdd }) {
const [text, setText] = useState(() => {
  // getting stored value
  const saved = localStorage.getItem("text");
  const initialValue = JSON.parse(saved);
  return initialValue || "";
});
 
  useEffect(() => {
    // almacenar el valor del input
    localStorage.setItem("text", JSON.stringify(text));
  }, [text]);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agregar nueva tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
 
export default TodoForm;
