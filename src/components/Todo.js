import React, { useState } from "react";
import Date from "./Date";
import ProgressBar from "./ProgressBar";
import Searchbar from "./Searchbar";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Date />
      <ProgressBar />
      <Searchbar />
      <TodoList />
    </div>
  );
}
