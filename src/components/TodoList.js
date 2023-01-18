import React, { useState, useEffect } from "react";

export default function TodoList(props) {
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState("");

  useEffect(() => {
    props.handleSearchTodo(props.search, props.status);
  }, [props.todos]);

  function handleListRender() {
    if (props.filteredTodos.length > 0) {
      return props.filteredTodos.map((el, index) => {
        if (index === editIndex) {
          return (
            <div key={index}>
              <input
                type='text'
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <div className='remove-container'>
                <button
                  onClick={() => {
                    props.handleRemoveTodo(el);
                  }}
                >
                  -
                </button>
              </div>
              <div className='edit-container'>
                <button
                  onClick={() => {
                    props.handleEditTodo(index, input);
                    let newIndex = "";
                    setEditIndex(newIndex);
                  }}
                >
                  V
                </button>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <p
                onClick={() => {
                  let newIndex = index;
                  setEditIndex(newIndex);
                }}
              >
                {el.name}
              </p>
            </div>
          );
        }
      });
    } else {
      return (
        <div>
          <p>
            Your search found no results.{" "}
            <span
              onClick={() => {
                props.handleSearchTodo("");
              }}
            >
              Clean the search here
            </span>
            &nbsp;to see all items.
          </p>
        </div>
      );
    }
  }
  return <div>{handleListRender()}</div>;
}
