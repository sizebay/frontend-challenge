import { useState } from "react";
import ITasks from "../../../types/ITasks";
import TaskButton from "../../TaskButtons";
import { IoRemoveCircle } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import TaskTooltip from "../../TaskTooltip";

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

  const [editing, setIsEditing] = useState("notActive");
  const editNotActive = editing === "notActive";
  const [description, setDescription] = useState(data.description);

  const editTask = () => {
    setIsEditing(editNotActive ? "active" : "notActive");
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


  return (
    <TaskPseudoContainer>
      <TaskContainer
        onClick={editTask}
        contentEditable={true}
        onInput={handleDescriptionChange}
        taskStyle={editNotActive ? "var(--grey)" : "var(--white)"}
      >
        <TaskCard>
          <DescriptionText>{description}</DescriptionText>
        </TaskCard>
        <TaskButtonsContainer taskStyle={editNotActive ? "none" : "flex"}>
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
      </TaskContainer>
      <TaskTooltipContainer taskStyle={editNotActive ? "none" : "flex"}>
        <TaskTooltip />
      </TaskTooltipContainer>
    </TaskPseudoContainer>
  );
};

export default Task;
