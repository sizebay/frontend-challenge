import React, { useState, useEffect, useContext } from 'react'

export const TaskContext = React.createContext<any>(null)

export const useTaskContext = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider")
  }
  return context
}

export interface Item {
  id: number;
  content: string;
  completed: boolean;
}

interface TaskProviderProps {
  children: React.ReactNode
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([])
  const [selectedButton, setSelectedButton] = useState<string | null>(null)

  useEffect(() => {
    const parsedItems = JSON.parse(localStorage.getItem("items") || "[]")
    setItems(parsedItems)

    const storedSelectedButton = JSON.parse(
      localStorage.getItem("selectedButton") || "null"
    )
    setSelectedButton(storedSelectedButton)
  }, [])

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  useEffect(() => {
    localStorage.setItem("selectedButton", JSON.stringify(selectedButton))
  }, [selectedButton])

  const addItem = (content: string) => {
    const newItems = [...items, { id: Date.now(), content, completed: false }]
    setItems(newItems)
  }

  const editItem = (id: number, newContent: string) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, content: newContent } : item
    )
    setItems(updatedItems);
  }

  const deleteItem = (id: number) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems);
  };

  const checkItem = (id: number) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: true } : item
    )
    setItems(updatedItems)
  }

  const pendingItems = items.filter((item) => !item.completed)
  const totalItemsCount = items.length
  const completedItemsCount = items.filter((item) => item.completed).length

  const value = {
    items,
    selectedButton,
    setSelectedButton,
    pendingItems,
    totalItemsCount,
    completedItemsCount,
    addItem,
    editItem,
    deleteItem,
    checkItem,
  };

  return (
    <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
  )
};

export const useItemService = () => useTaskContext()
