import React, { useState } from "react";
import { CenteredSquare, Main } from "./style";
import DateTimeDisplay from "../../components/DateTimeDisplay";
import ProgressBar from "../../components/ProgressBar";
import TaskStatusControls from "../../components/TaskStatusControls";
import NewItemBar from "../../components/NewItemBar";
import ItemList from "../../components/ItemList";

function SquareComponent() {
  const [items, setItems] = useState<string[]>([]);
  const totalTasks = 5;
  const completedTasks = 2;

  const handleAddItemClick = (item: string) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <CenteredSquare>
      <Main>
        <DateTimeDisplay />
        <ProgressBar completedTasks={completedTasks} totalTasks={totalTasks} />
        <TaskStatusControls />
        <NewItemBar onAddItemClick={handleAddItemClick} />
        <ItemList items={items} onDeleteItem={handleDeleteItem} />
      </Main>
    </CenteredSquare>
  );
}

export default SquareComponent;