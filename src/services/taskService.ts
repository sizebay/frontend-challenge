import { useState, useEffect } from "react";

interface TaskServiceProps {
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
  completedItems: string[];
  setCompletedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

export const useTaskService = ({
  items: initialItems,
  setItems: initialSetItems,
  completedItems: initialCompletedItems,
  setCompletedItems: initialSetCompletedItems,
}: TaskServiceProps) => {
  const [items, setItems] = useState<string[]>(initialItems);
  const [completedItems, setCompletedItems] = useState<string[]>(initialCompletedItems);

  const allItems = [...items, ...completedItems];

  const totalTasks = allItems.length;
  const completedTasks = completedItems.length;

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
    setItems((prevItems) => {
      const newCompletedItems = [...completedItems, checkedItem];
      updateStateAndLocalStorage(setCompletedItems, "completedItems", newCompletedItems);
      return prevItems.filter((item, i) => i !== index);
    });
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

  return {
    items,
    completedItems,
    totalTasks,
    completedTasks,
    addItem,
    deleteItem,
    checkItem,
  };
};
