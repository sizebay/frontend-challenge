import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import styled from "styled-components";
import {
  FaSearch,
  FaCheck,
  FaCheckCircle,
  FaPlusCircle,
  FaMinusCircle,
} from "react-icons/fa";
import "./TaskManager.css";

const useTaskManager = () => {
  const [doneSelected, setDoneSelected] = useState(false);
  const [pendingSelected, setPendingSelected] = useState(false);

  const handleDoneClick = () => {
    setDoneSelected(!doneSelected);
    setPendingSelected(false);
  };

  const handlePendingClick = () => {
    setPendingSelected(!pendingSelected);
    setDoneSelected(false);
  };

  const handleSearch = (event) => {
    // Lógica de busca
  };

  return {
    doneSelected,
    pendingSelected,
    handleDoneClick,
    handlePendingClick,
    handleSearch,
  };
};

const TaskManager = () => {
  const {
    doneSelected,
    pendingSelected,
    handleDoneClick,
    handlePendingClick,
    handleSearch,
  } = useTaskManager();

  const [newTaskText, setNewTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const handleAddTask = () => {
    const newTaskText = document.getElementById("newTaskText").value;

    if (newTaskText.trim() !== "") {
      const newTask = {
        text: newTaskText,
        done: false,
      };
      const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const updatedTasks = [...existingTasks, newTask];

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
      setNewTaskText("");
    }
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    let filtered = tasks;
    if (doneSelected) {
      filtered = filtered.filter((task) => task.done);
    }
    if (pendingSelected) {
      filtered = filtered.filter((task) => !task.done);
    }
    setFilteredTasks(filtered);
  }, [tasks, doneSelected, pendingSelected]);

  const calculateProgressBarPercent = () => {
    const totalTasks = tasks.length;
    const doneTasks = tasks.filter((task) => task.done).length;

    if (totalTasks === 0) {
      return 0;
    }
    const percent = (doneTasks / totalTasks) * 100;
    return percent;
  };

  return (
    <div>
      <ProgressBar percent={calculateProgressBarPercent()} />
      <div className="headerActions">
        <div className="actionButtons">
          <button
            className={` ${doneSelected ? "selected" : ""}`}
            onClick={handleDoneClick}
          >
            {doneSelected && <FaCheck />} Done
          </button>
          <button
            className={`customButton ${pendingSelected ? "selected" : ""}`}
            onClick={handlePendingClick}
          >
            {pendingSelected && <FaCheck />} Pending
          </button>
        </div>

        <div className="searchContainer">
          <input
            type="text"
            placeholder="Search items"
            className="searchBar"
            onChange={handleSearch}
          />
          <FaSearch className="SearchIcon" />
        </div>
      </div>

      <div>
        <div className="addItem">
          <input
            type="text"
            id="newTaskText"
            placeholder="Add new item..."
            className="inputSearch"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
          <FaPlusCircle className="PlusIcon" onClick={handleAddTask} />
        </div>
      </div>

      <div className="taskListContainer">
        <ul>
          {filteredTasks.map((task, index) => (
            <li key={index}>
              {task.text}
              <FaMinusCircle className="MinusIcon" />
              <FaCheckCircle className="CheckCircleIcon" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskManager;
