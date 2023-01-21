import React, { useEffect, useState } from "react";
import { db } from "./server/firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

import AddItem from "./AddItem";
import Calendar from "./Calendar";
import ProgressBar from "./ProgressBar";
import Searchbar from "./Searchbar";
import TodoList from "./TodoList";

import "../assets/styles/todo.css";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  // read task
  useEffect(() => {
    const q = query(collection(db, "tasks"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let tasksArr = [];
      querySnapshot.forEach((doc) => {
        tasksArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(tasksArr);
    });
    return () => unsubscribe();
  }, []);

  async function handleAddTodo(todo) {
    todo.name !== "" && setTodos([...todos, todo]);
    setDoc(doc(db, "tasks", todo.id), todo);
  }

  function handleRemoveTodo(todo) {
    let todosCopy = [...todos];
    todosCopy.forEach((el, index) => {
      el.id === todo.id && todosCopy.splice(index, 1);
    });
    setTodos(todosCopy);
    deleteDoc(doc(db, "tasks", todo.id));
  }

  function handleSearchTodo(todos, word, status) {
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

    return todosCopy;
  }

  function handleEditTodo(id, newName) {
    if (newName !== "") {
      let todosCopy = [...todos];
      todosCopy.map((el) => el.id === id && (el.name = newName));
      setTodos(todosCopy);
      updateDoc(doc(db, "tasks", id), {
        name: newName,
      });
    } else {
      return;
    }
  }

  function handleEditStatus(id) {
    let todosCopy = [...todos];
    todosCopy.map(
      (el) =>
        el.id === id &&
        (el.status === "Done" ? (el.status = "Pending") : (el.status = "Done"))
    );
    updateDoc(doc(db, "tasks", id), {
      status: status === "Done" ? "Pending" : "Done",
    });

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
        filteredTodos={handleSearchTodo(todos, search, status)}
        handleRemoveTodo={handleRemoveTodo}
        setSearch={setSearch}
        setStatus={setStatus}
        handleSearchTodo={handleSearchTodo}
        handleEditTodo={handleEditTodo}
        handleEditStatus={handleEditStatus}
      />
    </div>
  );
}
