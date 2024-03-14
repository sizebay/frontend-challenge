import React, { useEffect, useRef, useState } from "react";
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
  const tooltipTimeout = useRef<number | undefined>(undefined);

  const toggleEditing = () => setEditing(!editing);

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    removeTask(data.id);
  };

  const handleCompleteClick = () => completeTask(data.id);

  const handleMouseEnter = () => {
    if (!editing) {
      tooltipTimeout.current = window.setTimeout(() => {
        setShowTooltip(true);
      }, 70);
    }
  };

const handleMouseLeave = () => {
  if (!editing && tooltipTimeout.current !== undefined) {
    clearTimeout(tooltipTimeout.current);
    setShowTooltip(false);
  }
};

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setEditing(false);
    }
  };

  const taskContainerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      taskContainerRef.current &&
      !taskContainerRef.current.contains(event.target as Node)
    ) {
      setEditing(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <TaskPseudoContainer>
      <TaskContainer
        onClick={toggleEditing}
        taskStyle={editing ? "var(--white)" : "var(--grey)"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={taskContainerRef}
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
            <DescriptionText taskStyle={isCompleted ? "line-through" : "none"}>
              {description}
            </DescriptionText>
          )}
        </TaskCard>
        {editing && (
          <TaskButtonsContainer>
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
      {showTooltip && !editing && (
        <TaskTooltipContainer
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          taskStyle={editing ? "none" : "flex"}
          ref={taskContainerRef}
        >
          <TaskTooltip />
        </TaskTooltipContainer>
      )}
    </TaskPseudoContainer>
  );
};

export default Task;
