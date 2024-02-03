import { useState, useEffect, Dispatch, SetStateAction } from "react";

export interface Task {
  id: number;
  content: string;
  completed: boolean;
}

interface TaskServiceProps {
  items: Task[];
}

interface TaskServiceReturnType extends TaskServiceProps {
  selectedButton: string | null;
  setSelectedButton: Dispatch<SetStateAction<string | null>>;
  pendingItems: Task[];
  totalTasks: number;
  completedTasks: number;
  addItem: (content: string) => void;
  deleteItem: (id: number) => void;
  checkItem: (id: number) => void;
}

export const useTaskService = ({
  items: initialItems,
}: TaskServiceProps): TaskServiceReturnType => {
  const [items, setItems] = useState<Task[]>(initialItems);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const pendingItems = items.filter((item) => !item.completed);

  const totalTasks = items.length;
  const completedTasks = items.filter((item) => item.completed).length;

  const addItem = (content: string) => {
    setItems((prevItems) => {
      const newItems = [...prevItems, { id: Date.now(), content, completed: false }];
      localStorage.setItem("items", JSON.stringify(newItems));
      return newItems;
    });
  };

  const deleteItem = (id: number) => {
    setItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== id);
      localStorage.setItem("items", JSON.stringify(newItems));
      return newItems;
    });
  };

  const checkItem = (id: number) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, completed: true } : item
      );

      localStorage.setItem("items", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  useEffect(() => {
    const parsedItems = JSON.parse(localStorage.getItem("items") || "[]");
    setItems(parsedItems);

    const storedSelectedButton = JSON.parse(
      localStorage.getItem("selectedButton") || "null"
    );
    setSelectedButton(storedSelectedButton);
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedButton", JSON.stringify(selectedButton));
  }, [selectedButton]);

  return {
    items,
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
