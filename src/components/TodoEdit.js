import React, { useState } from 'react';
function TodoEdit({ todo, onSave }) {
  const [editedText, setEditedText] = useState(todo);

  const handleChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleSave = () => {
    onSave(editedText);
  };

  return (
    <div>
      <input
        type="text"
        value={editedText}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
}

export default TodoEdit;