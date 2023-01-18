import React, { useState } from "react";

export default function AddItem(props) {
  const [todo, setTodo] = useState("");

  function handleChange(e) {
    setTodo(e.target.value);
  }
  return (
    <div>
      <input
        type='text'
        placeholder='Add new item...'
        onChange={handleChange}
      />
      <button
        onClick={() => props.handleAddTodo({ name: todo, status: "Pending" })}
      >
        +
      </button>
    </div>
  );
}
