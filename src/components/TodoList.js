import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "../assets/styles/todoList.css";

export default function TodoList(props) {
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState("");
  // const [filteredTodos, setFilteredTodos] = useState([]);

  const { filteredTodos } = props;

  function handleListRender() {
    if (filteredTodos.length > 0) {
      return filteredTodos.map((el, index) => {
        if (index === editIndex) {
          return (
            <div key={index} className='todo-list-container'>
              <input
                type='text'
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    props.handleEditTodo(el.id, input);
                    setInput("");
                    let newIndex = "";
                    setEditIndex(newIndex);
                  }
                }}
                onBlur={(e) => {
                  setInput("");
                }}
                placeholder={el.name}
                autoFocus
              />
              <div className='todo-buttons'>
                <div
                  className='remove-container'
                  onClick={() => {
                    props.handleRemoveTodo(el);
                    let newIndex = "";
                    setEditIndex(newIndex);
                  }}
                >
                  <button className='todo-button'>-</button>
                </div>
                <div
                  className='edit-container'
                  onClick={() => {
                    props.handleEditStatus(el.id);
                    let newIndex = "";
                    setInput("");
                    setEditIndex(newIndex);
                  }}
                >
                  <button className='todo-button'>
                    <FontAwesomeIcon icon={faCheck} className='check green' />
                  </button>
                </div>
              </div>
              <p className='balloon'>Edit task</p>
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className='todo-list-container'
              onClick={() => {
                let newIndex = index;
                setEditIndex(newIndex);
              }}
            >
              <p>{el.name}</p>
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
                const empty = "";
                props.handleSearchTodo(empty);
                props.setStatus(empty);
                props.setSearch(empty);
              }}
              className='link'
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
