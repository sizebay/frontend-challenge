import React, { createContext, useContext, useState, ReactNode } from "react";
import ITasks, { FilterType } from "../types/ITasks";

interface TasksContextProps {
  tasks: ITasks[];
  addTask: (task: ITasks) => void;
  removeTask: (taskId: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  clearSearch: () => void;
  activeFilter: FilterType | null;
  setActiveFilter: (filter: FilterType | null) => void;
}

const TasksContext = createContext<TasksContextProps>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  searchTerm: "",
  setSearchTerm: () => {},
  clearSearch: () => {},
  activeFilter: null,
  setActiveFilter: () => {},
});

interface TasksProviderProps {
  children: ReactNode;
}

export const useTasksContext = () => useContext(TasksContext);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<FilterType | null>(null);

  function addTask(task: ITasks) {
    setTasks([...tasks, task]);
  }

  function removeTask(taskId: string) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function clearSearch() {
    setSearchTerm("");
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        searchTerm,
        setSearchTerm,
        clearSearch,
        activeFilter,
        setActiveFilter,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
