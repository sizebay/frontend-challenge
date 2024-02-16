import { FaMinusCircle, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Tooltip from "./utils/Tooltip";
import "./TaskList.css";

const TaskList = ({
  filteredTasks,
  doneSelected,
  handleAddTask,
  handleRemoveTask,
  handleMarkAsDone,
}) => {
  const [newTaskText, setNewTaskText] = useState("");
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [editableItemId, setEditableItemId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState("");

  useEffect(() => {
    setNewTaskText("");
  }, [filteredTasks]);

  const noDoneTasks =
    doneSelected && (filteredTasks || []).every((task) => !task.done);

  const handleMouseEnter = (taskId) => {
    setHoveredItemId(taskId);
  };

  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };

  const handleEditClick = (taskId) => {
    setEditableItemId(taskId);
    setEditedTaskText(
      filteredTasks.find((task) => task.id === taskId)?.text || ""
    );
  };

  const handleEditBlur = (taskId = null) => {
    if (editedTaskText.trim() !== "") {
      const updatedTasks = filteredTasks.map((task) =>
        task.id === taskId ? { ...task, text: editedTaskText } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
    setEditableItemId(null);
  };

  const handleEditKeyDown = (e, taskId) => {
    if (e.key === "Enter") {
      handleEditBlur(taskId);
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
              <li
                key={task.id}
                onMouseEnter={() => handleMouseEnter(task.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleEditClick(task.id)}
                className={`taskListItem ${
                  editableItemId === task.id ? "editReset" : ""
                }`}
              >
                <Tooltip
                  isVisible={
                    hoveredItemId === task.id && editableItemId !== task.id
                  }
                  text={"Edit Task"}
                />
                {editableItemId === task.id ? (
                  <div className="editContainer">
                    <input
                      className="editInput"
                      type="text"
                      value={editedTaskText}
                      onChange={(e) => setEditedTaskText(e.target.value)}
                      onKeyDown={(e) => handleEditKeyDown(e, task.id)}
                    />
                    <FaCheckCircle
                      className="checkCircleIcon edit"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditBlur(task.id);
                      }}
                    />
                  </div>
                ) : (
                  <>
                    {task.text}
                    {hoveredItemId === task.id && (
                      <>
                        <FaMinusCircle
                          className="minusIcon"
                          onClick={() => handleRemoveTask(task.id)}
                        />
                        <FaCheckCircle
                          className="checkCircleIcon"
                          onClick={() => handleMarkAsDone(task.id)}
                        />
                      </>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskList;
