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
  onRemove: (task: ITasks) => void;
}

const Task = ({ data, onRemove }: Props) => {
  const { completeTask } = useTasksContext();
  const isCompleted = data.isCompleted;
  const [editing, setEditing] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [description, setDescription] = useState(data.description);

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const handleDescriptionChange = (event: React.FocusEvent<HTMLDivElement>) => {
    setDescription(event.currentTarget.textContent || "");
  };

  const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onRemove(data);
  };

  const handleCompleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    completeTask(data.id);
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <TaskPseudoContainer>
      <TaskContainer
        onClick={toggleEditing}
        contentEditable={!isCompleted && editing}
        onBlur={() => setEditing(false)}
        onInput={handleDescriptionChange}
        taskStyle={editing ? "var(--white)" : "var(--grey)"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <TaskCard>
          <DescriptionText>{description}</DescriptionText>
        </TaskCard>
        {!isCompleted && editing && (
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
      {showTooltip && !isCompleted && !editing && (
        <TaskTooltipContainer>
          <TaskTooltip />
        </TaskTooltipContainer>
      )}
    </TaskPseudoContainer>
  );
};

export default Task;
