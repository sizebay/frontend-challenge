import React, { useState, useEffect } from "react";
import { CenteredSquare, Main } from "./style";
import DateTimeDisplay from "../../components/DateTimeDisplay";
import ProgressBar from "../../components/ProgressBar";
import TaskStatusControls from "../../components/SearchFilterPanel";
import NewItemBar from "../../components/NewItemBar";
import ListItems from "../../components/ListItems";

function Home() {
  const [items, setItems] = useState<string[]>(loadFromLocalStorage("items", []));
  const [completedItems, setCompletedItems] = useState<string[]>(loadFromLocalStorage("completedItems", []));

  const pendingItems = items.filter(item => !completedItems.includes(item));

  const totalTasks = items.length;
  const completedTasks = completedItems.length;
  const unfinishedTasksCount = pendingItems.length;

  const addItem = (item: string) => {
    const newItems = [...items, item];
    updateStateAndLocalStorage(setItems, "items", newItems);
  };

  const deleteItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    updateStateAndLocalStorage(setItems, "items", newItems);
  };

  const checkItem = (index: number) => {
    const checkedItem = items[index];
    const newCompletedItems = [...completedItems, checkedItem];
    updateStateAndLocalStorage(setCompletedItems, "completedItems", newCompletedItems);
  };

  useEffect(() => {
    const parsedCompletedItems = loadFromLocalStorage("completedItems", []);
    setCompletedItems(parsedCompletedItems);
  }, []);

  function loadFromLocalStorage(key: string, defaultValue: any) {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : defaultValue;
  }

  function updateStateAndLocalStorage(setter: React.Dispatch<React.SetStateAction<any>>, key: string, value: any) {
    setter(value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  return (
    <CenteredSquare>
      <Main>
        <DateTimeDisplay />
        <ProgressBar completedItems={completedTasks} totalTasks={totalTasks} />
        <TaskStatusControls />
        <NewItemBar onAddItemClick={addItem} />
        <ListItems items={pendingItems} onDeleteItem={deleteItem} onCheckClick={checkItem} completedItems={completedItems} />
      </Main>
    </CenteredSquare>
  );
}

export default Home;
