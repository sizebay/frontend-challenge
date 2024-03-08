import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import ITasks, { FilterType } from "../types/ITasks";

interface TasksContextProps {
  tasks: ITasks[];
  addTask: (task: ITasks) => void;
  removeTask: (taskId: string) => void;
  completeTask: (taskId: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  clearSearch: () => void;
  clearSearchTerm: () => void;
  activeFilter: string;
  handleFilterActive: (filter: FilterType) => void;
  clearFilter: () => void;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleClearValue: () => void;
}

const TasksContext = createContext<TasksContextProps>({} as TasksContextProps);

interface TasksProviderProps {
  children: ReactNode;
}

export const useTasksContext = () => useContext(TasksContext);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<ITasks[]>(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState("unset");
  const [value, setValue] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(task: ITasks) {
    setTasks([...tasks, task]);
  }

  function removeTask(taskId: string) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function completeTask(taskId: string) {
    setTasks(
      tasks?.map((task) => {
        if (task.id === taskId) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  }

  function clearSearch() {
    setSearchTerm("");
  }

  function clearFilter() {
    setActiveFilter("unset");

    handleClearValue();
  }

  function handleClearValue() {
    setValue("");
  }

  function clearSearchTerm() {
    setSearchTerm("");
  }

  function handleFilterActive(nextFilter: FilterType) {
    nextFilter === activeFilter
      ? setActiveFilter("unset")
      : setActiveFilter(nextFilter);
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
        clearSearchTerm,
        activeFilter,
        handleFilterActive,
        completeTask,
        clearFilter,
        value,
        setValue,
        handleClearValue,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
