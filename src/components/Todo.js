import React, { useState } from "react";
import AddItem from "./AddItem";
import Calendar from "./Calendar";
import ProgressBar from "./ProgressBar";
import Searchbar from "./Searchbar";
import TodoList from "./TodoList";

import "../assets/styles/todo.css";

export default function Todo() {
  const [todos, setTodos] = useState([
    { name: "Test 1", status: "Done" },
    { name: "Test 4", status: "Done" },
    { name: "Abc 4", status: "Pending" },
  ]);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  function handleAddTodo(todo) {
    todo.name !== "" && setTodos([...todos, todo]);
  }

  function handleRemoveTodo(todo) {
    let todosCopy = [...todos];
    todosCopy.forEach((el, index) => {
      el.name === todo.name && todosCopy.splice(index, 1);
    });
    setTodos(todosCopy);
  }

  function handleSearchTodo(word, status) {
    let todosCopy = [...todos];

    if (status && word) {
      let filter = todosCopy.filter((el) => {
        return (
          el.name.toLowerCase().includes(word.toLowerCase()) &&
          el.status === status
        );
      });
      todosCopy = filter;
    } else if (word) {
      let filtered = todosCopy.filter((el) => {
        return el.name.toLowerCase().includes(word.toLowerCase());
      });
      todosCopy = filtered;
    } else if (status) {
      let statusFilter = todosCopy.filter((el) => {
        return el.status === status;
      });
      todosCopy = statusFilter;
    }

    setFilteredTodos(todosCopy);
  }

  function handleEditTodo(name, newName) {
    if (newName !== "") {
      let todosCopy = [...todos];
      todosCopy.map((el) => el.name === name && (el.name = newName));
      setTodos(todosCopy);
    } else {
      return;
    }
  }

  function handleEditStatus(name) {
    let todosCopy = [...todos];
    todosCopy.map(
      (el) =>
        el.name === name &&
        (el.status === "Done" ? (el.status = "Pending") : (el.status = "Done"))
    );

    setTodos(todosCopy);
  }

  return (
    <div className='todo-container'>
      <Calendar />
      <ProgressBar todos={todos} />
      <Searchbar
        handleSearchTodo={handleSearchTodo}
        setSearch={setSearch}
        setStatus={setStatus}
        search={search}
        status={status}
      />
      <AddItem handleAddTodo={handleAddTodo} />
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        handleRemoveTodo={handleRemoveTodo}
        search={search}
        status={status}
        setSearch={setSearch}
        setStatus={setStatus}
        handleSearchTodo={handleSearchTodo}
        handleEditTodo={handleEditTodo}
        handleEditStatus={handleEditStatus}
      />
    </div>
  );
}
