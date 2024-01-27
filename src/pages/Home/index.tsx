import React from "react";
import { CenteredSquare, Main } from "./style";
import DateTimeDisplay from "../../components/DateTimeDisplay";
import ProgressBar from "../../components/ProgressBar";
import TaskStatusControls from "../../components/SearchFilterPanel";
import NewItemBar from "../../components/NewItemBar";
import ListItems from "../../components/ListItems";
import { useTaskService } from "../../services/taskService";

function Home() {
  const {
    items,
    completedItems,
    totalTasks,
    completedTasks,
    addItem,
    deleteItem,
    checkItem,
  } = useTaskService({
    items: [],
    setItems: () => {},
    completedItems: [],
    setCompletedItems: () => {},
  });

  return (
    <CenteredSquare>
      <Main>
        <DateTimeDisplay />
        <ProgressBar completedItems={completedTasks} totalTasks={totalTasks} />
        <TaskStatusControls />
        <NewItemBar onAddItemClick={addItem} />
        <ListItems items={items} onDeleteItem={deleteItem} onCheckClick={checkItem} completedItems={completedItems} />
      </Main>
    </CenteredSquare>
  );
}

export default Home;
