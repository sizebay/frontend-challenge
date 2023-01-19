import React, { useState } from "react";

import "../assets/styles/addItem.css";

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
        value={todo}
      />
      <button
        onClick={() => {
          props.handleAddTodo({ name: todo, status: "Pending" });
          setTodo("");
        }}
      >
        <div>+</div>
      </button>
    </div>
  );
}
