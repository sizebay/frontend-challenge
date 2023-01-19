import React, { useState } from "react";

import "../assets/styles/additem.css";

export default function AddItem(props) {
  const [todo, setTodo] = useState("");

  function handleChange(e) {
    setTodo(e.target.value);
  }
  return (
    <div className='add-container'>
      <input
        type='text'
        placeholder='Add new item...'
        onChange={handleChange}
      />
      <button
        onClick={() => props.handleAddTodo({ name: todo, status: "Pending" })}
      >
        <div>+</div>
      </button>
    </div>
  );
}
