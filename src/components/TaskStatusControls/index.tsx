import React, { useState, useEffect } from "react";
import { ButtonsContainer, ContainerControls } from "./style";
import DoneButton from "../DoneButton";
import PendingButton from "../PendingButton";
import SearchBar from "../SearchBar";

const LOCAL_STORAGE_KEY = "taskItems";

interface TaskItem {
  name: string;
  status: string;
}

function TaskStatusControls() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [taskItems, setTaskItems] = useState<TaskItem[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log("Stored items from localStorage:", storedItems);
  
    if (storedItems) {
      setTaskItems(JSON.parse(storedItems));
    }
  }, []);
  
  useEffect(() => {
    console.log("Updating localStorage with taskItems:", taskItems);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taskItems));
  }, [taskItems]);
  
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
  
    console.log("Adding task:", newTask);
  
    setTaskItems((prevTaskItems) => [...prevTaskItems, newTask]);
  };

  return (
    <ContainerControls>
      <ButtonsContainer>
        <DoneButton
          isSelected={selectedButton === "done"}
          onClick={() => handleButtonClick("done")}
        />
        <PendingButton
          isSelected={selectedButton === "pending"}
          onClick={() => handleButtonClick("pending")}
        />
      </ButtonsContainer>
      <SearchBar onAddItemClick={handleAddTask} />
      <ul>
        {taskItems.map((task, index) => (
          <li key={index}>{task.name}</li>
        ))}
      </ul>
    </ContainerControls>
  );
}

export default TaskStatusControls;
