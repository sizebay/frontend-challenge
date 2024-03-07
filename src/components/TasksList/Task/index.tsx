import { useState } from "react";
import ITasks from "../../../types/ITasks";
import TaskButton from "../../TaskButtons";
import { IoRemoveCircle } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

import {
  TaskCard,
  TaskContainer,
  DescriptionText,
  TaskButtonsContainer,
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

  const [description, setDescription] = useState(data.description);

  const handleDescriptionChange = (event: React.FocusEvent<HTMLDivElement>) => {
    setDescription(event.currentTarget.textContent || "");
  };

  const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onRemove(data);
  };

  const handleCompleteClick = () => {
    completeTask(data.id);
  };

  const handleTaskContainerClick = () => {
    if (!isCompleted) {
      handleCompleteClick();
    }
  };

  return (
    <TaskPseudoContainer>
      <TaskContainer
        onClick={handleTaskContainerClick}
        contentEditable={!isCompleted}
        onInput={handleDescriptionChange}
        taskStyle={isCompleted ? "var(--grey)" : "var(--white)"}
      >
        <TaskCard>
          <DescriptionText>{description}</DescriptionText>
        </TaskCard>
        {!isCompleted && (
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
    </TaskPseudoContainer>
  );
};

export default Task;
