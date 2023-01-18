import React, { useState } from "react";

export default function Searchbar(props) {
  const [name, setName] = useState();
  const [status, setStatus] = useState();

  return (
    <div>
      <button
        onClick={() => {
          props.handleSearchTodo(name, "Done");
        }}
      >
        Done
      </button>
      <button
        onClick={() => {
          props.handleSearchTodo(name, "Pending");
        }}
      >
        Pending
      </button>
      <input
        type='text'
        placeholder='Search items'
        onChange={(e) => {
          const newName = e.target.value;
          setName(newName);
          props.handleSearchTodo(newName);
          props.setSearch(newName);
        }}
      />
    </div>
  );
}
