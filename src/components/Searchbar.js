import React, { useState } from "react";

export default function Searchbar(props) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div>
      {status !== "Done" ? (
        <button
          onClick={() => {
            const newStatus = "Done";
            setStatus(newStatus);
            props.handleSearchTodo(name, newStatus);
            props.setStatus(newStatus);
          }}
          className='Active'
        >
          Done
        </button>
      ) : (
        <button
          onClick={() => {
            const newStatus = "Done";
            setStatus(newStatus);
            props.handleSearchTodo(name, newStatus);
            props.setStatus(newStatus);
          }}
          className=''
        >
          Done
        </button>
      )}
      <button
        onClick={() => {
          const newStatus = "Pending";
          setStatus(newStatus);
          props.handleSearchTodo(name, newStatus);
          props.setStatus(newStatus);
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
          props.handleSearchTodo(newName, status);
          props.setSearch(newName);
        }}
        value={name}
        className='search-input'
      />
      <button
        onClick={() => {
          const newStatus = "";
          setStatus(newStatus);
          props.setStatus(newStatus);
          const newName = "";
          setName(newName);
          props.setSearch(newName);
          props.handleSearchTodo(newName);
        }}
      >
        X
      </button>
    </div>
  );
}
