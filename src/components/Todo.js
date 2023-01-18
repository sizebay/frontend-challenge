import React, { useState } from "react";
import AddItem from "./AddItem";
import Calendar from "./Calendar";
import ProgressBar from "./ProgressBar";
import Searchbar from "./Searchbar";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([
    { name: "Test 1", status: "Done" },
    { name: "Test 2", status: "Pending" },
    { name: "Test 4", status: "Done" },
    { name: "Abc 4", status: "Pending" },
  ]);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  function handleAddTodo(todo) {
    setTodos([...todos, todo]);
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

  function handleEditTodo(id, newName) {
    let todosCopy = [...todos];
    todosCopy[id].name = newName;
    console.log(todosCopy);
    setTodos(todosCopy);
  }

  return (
    <div>
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
      />
    </div>
  );
}
