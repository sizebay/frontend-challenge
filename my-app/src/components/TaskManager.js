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

const SearchContainer = styled.div`
  position: relative;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 75px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const PlusIcon = styled(FaPlusCircle)`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  position: absolute;
  right: 60px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 12.5px;
  color: white;
  background-color: #4da6b3;
  font-size: 25px;
`;

const CheckCircleIcon = styled(FaCheckCircle)`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  position: absolute;
  right: -0.5px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 12.5px;
  color: white;
  background-color: #5de290;
  font-size: 25px;
`;

const MinusIcon = styled(FaMinusCircle)`
  position: absolute;
  right: 49px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 12.5px;
  color: white;
  background-color: #e34f4f;
  font-size: 25px;
`;

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

        <SearchContainer>
          <input
            type="text"
            placeholder="Search items"
            className="searchBar"
            onChange={handleSearch}
          />
          <SearchIcon />
        </SearchContainer>
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
          <PlusIcon onClick={handleAddTask} />
        </div>
      </div>

      <div className="taskListContainer">
        <ul>
          {filteredTasks.map((task, index) => (
            <li key={index}>
              {task.text}
              <MinusIcon />
              <CheckCircleIcon />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskManager;
