import React, { useState } from "react";
import { ButtonsContainer, ContainerControls, TaskList, TaskListItem } from "./style";
import SearchBar from "../SearchBar";
import { FaCheck } from "react-icons/fa";
import ButtonStatus from "../ButtonStatus";

interface TaskItem {
  name: string;
  status: string;
}

function TaskStatusControls() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [taskItems, setTaskItems] = useState<TaskItem[]>([]);

  const handleButtonClick = (button: string) => {
    setSelectedButton((prevSelectedButton) =>
      prevSelectedButton === button ? null : button
    );
  };

  const handleAddTask = (taskName: string) => {
    const newTask: TaskItem = {
      name: taskName,
      status: selectedButton || "pending",
    };

    setTaskItems((prevTaskItems) => {
      const updatedTaskItems = [...prevTaskItems, newTask];
      return updatedTaskItems;
    });
  };

  return (
    <ContainerControls>
      <ButtonsContainer>
        <ButtonStatus
          isSelected={selectedButton === "done"}
          onClick={() => handleButtonClick("done")}
          icon={<FaCheck />}
          label="Done"
        />
        <ButtonStatus
          isSelected={selectedButton === "pending"}
          onClick={() => handleButtonClick("pending")}
          icon={<FaCheck />}
          label="Pending"
        />
      </ButtonsContainer>
      <SearchBar onAddItemClick={handleAddTask} />
      <TaskList>
        {taskItems.map((task, index) => (
          <TaskListItem key={index}>{task.name}</TaskListItem>
        ))}
      </TaskList>
    </ContainerControls>
  );
}

export default TaskStatusControls;