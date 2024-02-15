import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import TaskList from "./TaskList";
import HeaderActions from "./HeaderActions";
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

  return {
    doneSelected,
    pendingSelected,
    handleDoneClick,
    handlePendingClick,
  };
};

const TaskManager = () => {
  const { doneSelected, pendingSelected, handleDoneClick, handlePendingClick } =
    useTaskManager();

  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    let filteredTasks = tasks;

    if (doneSelected || pendingSelected) {
      filteredTasks = filteredTasks.filter((task) => {
        if (doneSelected) {
          return task.done;
        } else if (pendingSelected) {
          return !task.done;
        }
        return true;
      });
    }

    setFilteredTasks(filteredTasks);
  }, [doneSelected, pendingSelected, tasks]);

  return (
    <div>
      <ProgressBar tasks={filteredTasks} />

      <HeaderActions
        doneSelected={doneSelected}
        pendingSelected={pendingSelected}
        handleDoneClick={handleDoneClick}
        handlePendingClick={handlePendingClick}
      />

      <TaskList tasks={filteredTasks} doneSelected={doneSelected} />
    </div>
  );
};

export default TaskManager;
