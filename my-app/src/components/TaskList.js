import { FaMinusCircle, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "./TaskList.css";

const TaskList = ({
  filteredTasks,
  doneSelected,
  handleAddTask,
  handleRemoveTask,
  handleMarkAsDone,
}) => {
  const [newTaskText, setNewTaskText] = useState("");

  useEffect(() => {
    setNewTaskText("");
  }, [filteredTasks]);

  const noDoneTasks =
    doneSelected && (filteredTasks || []).every((task) => !task.done);

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
        <FaPlusCircle
          className="plusIcon"
          onClick={() =>
            handleAddTask({
              id: new Date().getTime(),
              text: newTaskText,
              done: false,
            })
          }
        />
      </div>

      <div className="taskListContainer">
        {noDoneTasks ? (
          <p className="noTasksMessage">
            There are no items marked as done. Clear the filter here to see all
            items.
          </p>
        ) : (
          <ul>
            {(filteredTasks || []).map((task) => (
              <li key={task.id}>
                {task.text}
                <FaMinusCircle
                  className="minusIcon"
                  onClick={() => handleRemoveTask(task.id)}
                />
                <FaCheckCircle
                  className="checkCircleIcon"
                  onClick={() => handleMarkAsDone(task.id)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskList;
