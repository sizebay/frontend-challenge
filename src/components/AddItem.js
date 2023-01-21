import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
          props.handleAddTodo({ name: todo, status: "Pending", id: uuidv4() });
          setTodo("");
        }}
      >
        <div>+</div>
      </button>
    </div>
  );
}
