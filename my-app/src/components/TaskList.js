import { FaMinusCircle, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "./TaskList.css";

const TaskList = ({ tasks, doneSelected }) => {
  const [newTaskText, setNewTaskText] = useState("");
  const [localTasks, setLocalTasks] = useState(tasks);

  useEffect(() => {
    setLocalTasks(tasks);
  }, [tasks]);

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

  const noDoneTasks = doneSelected && localTasks.every((task) => !task.done);

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
        <FaPlusCircle className="plusIcon" onClick={handleAddTask} />
      </div>

      <div className="taskListContainer">
        {noDoneTasks ? (
          <p className="noTasksMessage">
            There are no items marked as done. Clear the filter here to see all
            items.
          </p>
        ) : (
          <ul>
            {localTasks.map((task, index) => (
              <li key={index}>
                {task.text}
                <FaMinusCircle className="minusIcon" />
                <FaCheckCircle className="checkCircleIcon" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskList;
