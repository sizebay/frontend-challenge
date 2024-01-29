import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface TaskServiceProps {
  items: string[];
  completedItems: string[];
}

interface TaskServiceReturnType extends TaskServiceProps {
  selectedButton: string | null;
  setSelectedButton: Dispatch<SetStateAction<string | null>>;
  pendingItems: string[];
  totalTasks: number;
  completedTasks: number;
  addItem: (item: string) => void;
  deleteItem: (index: number) => void;
  checkItem: (index: number) => void;
}

export const useTaskService = ({
  items: initialItems,
  completedItems: initialCompletedItems,
}: TaskServiceProps): TaskServiceReturnType => {
  const [items, setItems] = useState<string[]>(initialItems);
  const [completedItems, setCompletedItems] = useState<string[]>(initialCompletedItems);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const allItems = [...items, ...completedItems];
  const pendingItems = items.filter(item => !completedItems.includes(item));

  const totalTasks = allItems.length;
  const completedTasks = completedItems.length;

  const addItem = (item: string) => {
    setItems((prevItems) => {
      const newItems = [...prevItems, item];
      localStorage.setItem("items", JSON.stringify(newItems));
      return newItems;
    });
  };

  const deleteItem = (index: number) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(newItems));
      return newItems;
    });
  };

  const checkItem = (index: number) => {
    setItems((prevItems) => {
      const checkedItem = prevItems[index];
      const newCompletedItems = [...completedItems, checkedItem];
      setCompletedItems(newCompletedItems);
      localStorage.setItem("completedItems", JSON.stringify(newCompletedItems));
      return prevItems.filter((item, i) => i !== index);
    });
  };

  useEffect(() => {
    const parsedCompletedItems = JSON.parse(localStorage.getItem("completedItems") || "[]");
    setCompletedItems(parsedCompletedItems);

    const parsedItems = JSON.parse(localStorage.getItem("items") || "[]");
    setItems(parsedItems);

    const storedSelectedButton = JSON.parse(localStorage.getItem("selectedButton") || "null");
    setSelectedButton(storedSelectedButton);

  }, []);

  useEffect(() => {
    localStorage.setItem("selectedButton", JSON.stringify(selectedButton));
  }, [selectedButton]);

  return {
    items,
    completedItems,
    selectedButton,
    setSelectedButton,
    pendingItems,
    totalTasks,
    completedTasks,
    addItem,
    deleteItem,
    checkItem,
  };
};
