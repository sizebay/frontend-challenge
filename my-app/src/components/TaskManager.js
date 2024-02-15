import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import { FaSearch, FaCheck } from "react-icons/fa";
import TaskList from "./TaskList";
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

  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    let filtered = tasks;

    filtered = doneSelected ? filtered.filter((task) => task.done) : filtered;
    filtered = pendingSelected
      ? filtered.filter((task) => !task.done)
      : filtered;

    setFilteredTasks(filtered);
  }, [tasks, doneSelected, pendingSelected]);

  return (
    <div>
      <ProgressBar tasks={filteredTasks} />
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

      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default TaskManager;
