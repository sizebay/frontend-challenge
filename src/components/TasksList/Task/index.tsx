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

interface Props {
  data: ITasks;
}

const Task = ({ data }: Props) => {
  const [editing, setIsEditing] = useState("notActive");
  const editNotActive = editing === "notActive";

  const editTask = () => {
    setIsEditing(editNotActive ? "active" : "notActive");
  };

  return (
    <TaskPseudoContainer>
      <TaskContainer
        onClick={editTask}
        taskStyle={editNotActive ? "var(--grey)" : "var(--white)"}
      >
        <TaskCard>
          <DescriptionText contentEditable={true}>
            {data.description}
          </DescriptionText>
        </TaskCard>
        <TaskButtonsContainer
          taskStyle={editNotActive ? "none" : "flex"}
        >
          <TaskButton name="remove" backgroundColor="var(--warning-red)">
            <IoRemoveCircle color="white" size={27} />
          </TaskButton>
          <TaskButton name="done" backgroundColor="var(--done-green)">
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
