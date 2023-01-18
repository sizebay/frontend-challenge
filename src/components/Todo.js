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

    // if (status && word) {
    //   let result = [];
    //   let filtered = todosCopy.filter((el) => {
    //     return el.name.toLowerCase().includes(word.toLowerCase());
    //   });
    //   result.push(filtered);

    //   let statusFilter = todosCopy.filter((el) => {
    //     return el.status === status;
    //   });

    //   result.push(statusFilter);
    // }

    if (word) {
      let filtered = todosCopy.filter((el) => {
        return el.name.toLowerCase().includes(word.toLowerCase());
      });
      todosCopy = filtered;
    }

    if (status) {
      let statusFilter = todosCopy.filter((el) => {
        return el.status === status;
      });
      todosCopy = statusFilter;
    }
    // Object.keys(todosCopy).filter();
    // if (word) {
    //   todosCopyCopy.forEach((el, index) => {
    //     if (el.name.toLowerCase().includes(word.toLowerCase())) {
    //       todosCopy.splice(index, 1);
    //     }
    //   });
    // }
    // const filteredTodosCopy = [];
    // if (word) {
    //   todosCopy.forEach((el) => {
    //     el.name.toLowerCase().includes(word) && filteredTodosCopy.push(el);
    //   });
    // }

    // if (status) {
    //   todosCopy.forEach((el) => {
    //     el.status === status && filteredTodosCopy.push(el);
    //   });
    // }
    console.log(todosCopy);
    setFilteredTodos(todosCopy);
  }

  return (
    <div>
      <Calendar />
      <ProgressBar todos={todos} />
      <Searchbar handleSearchTodo={handleSearchTodo} setSearch={setSearch} />
      <AddItem handleAddTodo={handleAddTodo} />
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        handleRemoveTodo={handleRemoveTodo}
        search={search}
        handleSearchTodo={handleSearchTodo}
      />
    </div>
  );
}
