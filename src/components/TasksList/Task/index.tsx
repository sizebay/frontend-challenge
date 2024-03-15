import TaskTooltip from "../../TaskTooltip";
import ITasks from "../../../types/ITasks";
import React, { useEffect, useRef, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useTasksContext } from "../../../context/TasksContext";
import { IoRemoveCircle } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import {
  TaskCard,
  TaskContainer,
  DescriptionText,
  TaskButtonsContainer,
  TaskTooltipContainer,
  TaskMainContainer,
  RemoveTaskButton,
  ActionTaskButton,
} from "./styles";
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

  const handleCompleteClick = () => completeTask(data.id);

  const taskContainerRef = useRef<HTMLDivElement>(null);

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    removeTask(data.id);
  };

  const handleMouseEnter = () => {
    if (!editing && !showTooltip) {
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
    <TaskMainContainer>
      <TaskContainer
        onClick={toggleEditing}
        backgroundColor={!editing ? "true" : "false"}
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
            <RemoveTaskButton name="remove" onClick={handleRemoveClick}>
              <IoRemoveCircle color="white" size={27} />
            </RemoveTaskButton>
            <ActionTaskButton
              name="done"
              backgroundColor={isCompleted ? "true" : "false"}
              onClick={handleCompleteClick}
            >
              {isCompleted ? (
                <BsFillArrowRightCircleFill color="white" size={22} />
              ) : (
                <FaCheckCircle color="white" size={22} />
              )}
            </ActionTaskButton>
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
    </TaskMainContainer>
  );
};

export default Task;
