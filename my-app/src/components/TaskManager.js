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
    setFilteredTasks(storedTasks);
  }, []);

  useEffect(() => {
    let updatedFilteredTasks = tasks;

    if (doneSelected || pendingSelected) {
      updatedFilteredTasks = tasks.filter((task) => {
        if (doneSelected) {
          return task.done;
        } else if (pendingSelected) {
          return !task.done;
        }
        return true;
      });
    }

    setFilteredTasks(updatedFilteredTasks);
  }, [doneSelected, pendingSelected, tasks]);

  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const handleMarkAsDone = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, done: true };
      }
      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  return (
    <div>
      <ProgressBar tasks={filteredTasks} />

      <HeaderActions
        doneSelected={doneSelected}
        pendingSelected={pendingSelected}
        handleDoneClick={handleDoneClick}
        handlePendingClick={handlePendingClick}
      />

      <TaskList
        filteredTasks={filteredTasks}
        doneSelected={doneSelected}
        handleAddTask={handleAddTask}
        handleRemoveTask={handleRemoveTask}
        handleMarkAsDone={handleMarkAsDone}
      />
    </div>
  );
};

export default TaskManager;
