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
  function handleButtonClick(button: string) {
    setSelectedButton((prevSelectedButton) =>
      prevSelectedButton === button ? null : button
    );
  }

  function handleAddTask(taskName: string) {
    const newTask: TaskItem = {
      name: taskName,
      status: selectedButton || "pending",
    };

    setTaskItems((prevTaskItems) => [...prevTaskItems, newTask]);
  }

  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [taskItems, setTaskItems] = useState<TaskItem[]>([]);

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