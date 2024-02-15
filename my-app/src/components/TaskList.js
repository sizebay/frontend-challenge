import { FaMinusCircle, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import React, { useState } from "react";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  const [newTaskText, setNewTaskText] = useState("");
  const [localTasks, setLocalTasks] = useState(tasks);

  const handleAddTask = () => {
    const trimmedText = newTaskText.trim();
    if (trimmedText !== "") {
      const newTask = {
        text: trimmedText,
        done: false,
      };
      const updatedTasks = [...localTasks, newTask];

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setLocalTasks(updatedTasks);
      setNewTaskText("");
    }
  };

  return (
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

      <div className="taskListContainer">
        <ul>
          {localTasks.map((task, index) => (
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

export default TaskList;
