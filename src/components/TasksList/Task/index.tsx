import React, { useState } from "react";
import ITasks from "../../../types/ITasks";
import { IoRemoveCircle } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import TaskTooltip from "../../TaskTooltip";
import TaskButton from "../../TaskButtons";
import {
  TaskCard,
  TaskContainer,
  DescriptionText,
  TaskButtonsContainer,
  TaskTooltipContainer,
  TaskPseudoContainer,
} from "./styles";
import { useTasksContext } from "../../../context/TasksContext";

interface Props {
  data: ITasks;
}

const Task = ({ data }: Props) => {
  const { removeTask, completeTask } = useTasksContext();
  const isCompleted = data.isCompleted;
  const [editing, setEditing] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [description, setDescription] = useState(data.description);

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    removeTask(data.id);
  };

  const handleCompleteClick = () => {
    completeTask(data.id);
  };

  const handleMouseEnter = () => {
    if (!editing) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    if (!editing) {
      setShowTooltip(false);
    }
    setEditing(false);
  };
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setEditing(false);
    }
  };

  return (
    <TaskPseudoContainer>
      <TaskContainer
        onClick={toggleEditing}
        taskStyle={editing ? "var(--white)" : "var(--grey)"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <TaskCard>
          {editing ? (
            <input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          ) : (
            <DescriptionText>{description}</DescriptionText>
          )}
        </TaskCard>
        {!isCompleted && editing && (
          <TaskButtonsContainer taskStyle={editing ? "block" : "none"}>
            <TaskButton
              name="remove"
              backgroundColor="var(--warning-red)"
              onClick={handleRemoveClick}
            >
              <IoRemoveCircle color="white" size={27} />
            </TaskButton>
            <TaskButton
              name="done"
              backgroundColor="var(--done-green)"
              onClick={handleCompleteClick}
            >
              <FaCheckCircle color="white" size={22} />
            </TaskButton>
          </TaskButtonsContainer>
        )}
      </TaskContainer>
      <TaskTooltipContainer
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {showTooltip && !isCompleted && !editing && <TaskTooltip />}
      </TaskTooltipContainer>
    </TaskPseudoContainer>
  );
};

export default Task;
