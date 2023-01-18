import React from "react";

export default function Searchbar(props) {
  return (
    <div className='search-container'>
      <button
        onClick={() => {
          const newStatus = "Done";
          props.handleSearchTodo(props.search, newStatus);
          props.setStatus(newStatus);
        }}
        className={props.status === "Done" ? "active" : ""}
      >
        Done
      </button>
      <button
        onClick={() => {
          const newStatus = "Pending";
          props.handleSearchTodo(props.search, newStatus);
          props.setStatus(newStatus);
        }}
        className={props.status === "Pending" ? "active" : ""}
      >
        Pending
      </button>
      <input
        type='text'
        placeholder='Search items'
        onChange={(e) => {
          const newName = e.target.value;
          props.handleSearchTodo(newName, props.status);
          props.setSearch(newName);
        }}
        value={props.search}
        className='search-input'
      />
      <div
        onClick={() => {
          const empty = "";
          props.setStatus(empty);
          props.setSearch(empty);
          props.handleSearchTodo(empty);
        }}
        className='clear-search-field'
      >
        X
      </div>
    </div>
  );
}
