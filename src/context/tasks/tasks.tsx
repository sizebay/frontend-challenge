import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import "react-toastify/dist/ReactToastify.css";
import useTasks from "../../hooks/useTasks";
import { TaskItem } from "../../types/task";
import { saveToLocalStorage } from "../../helpers/localStorage";
import { ToastContainer, toast } from "react-toastify";
import { EFilters } from "../../types/filters";

interface TasksContextProps {
  tasks: TaskItem[];
  saveTask: (task: string) => void;
  deleteTask: (index: number) => void;
  editTask: (task: TaskItem, newValue: string) => void;
  defineTaskStatus: (index: number) => void;
  filterTasksByStatus: (status: EFilters) => void;
  filter: EFilters;
  setFilter: React.Dispatch<React.SetStateAction<EFilters>>;
  clearFilters: () => void;
  searchTask: (input: string) => TaskItem[];
}

const TasksContext = createContext<TasksContextProps | null>(null);

export function useTasksContext() {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasksContext must be used within a TasksProvider");
  }

  return context;
}

type TaskProps = {
  children: ReactNode;
};

export function TasksProvider({ children }: TaskProps) {
  const { tasks, setTasks } = useTasks();
  const [filter, setFilter] = useState(EFilters.NONE);

  useEffect(() => {
    if (tasks.length > 0) {
      const allIsDone = tasks.every((t) => t.isDone === true);
      if (allIsDone) {
        toast("All done!");
      }
    }

    saveToLocalStorage("taskList", tasks);
  }, [tasks]);

  const saveTask = (task: string) => {
    if (task === "") {
      return;
    }

    const newTask: TaskItem = {
      id: new Date().getTime(),
      task: task,
      isDone: false,
    };

    const newTaskList = [...tasks, newTask];
    setTasks(newTaskList);
  };

  const editTask = (task: TaskItem, newValue: string) => {
    setTasks((prevTasks) => {
      const updatedList = prevTasks.map((t) =>
      t.id === task.id ? {...task, task: newValue} : t
    );
    return updatedList;
    });
  }

  const deleteTask = (index: number) => {
    setTasks((prevList) => {
      const updatedList = prevList.filter((t) => t.id !== index);
      return updatedList;
    });
  };

  const defineTaskStatus = (index: number) => {
    setTasks((prevList) => {
      const updatedList = prevList.map((task) =>
        task.id === index ? { ...task, isDone: !task.isDone } : task
      );
      return updatedList;
    });
  };

  const filterTasksByStatus = (status: EFilters) => {
    const isSameFilter = status === filter;
    setFilter(isSameFilter ? EFilters.NONE : status);
  };

  const searchTask = (input: string): TaskItem[] => {
    const searchTerm = input.toLocaleLowerCase();
    const filtered:TaskItem[] = tasks.filter((t) => {
      if (filter === EFilters.DONE) {
        return t.task.toLocaleLowerCase().includes(searchTerm) && t.isDone;
      } else if (filter === EFilters.PENDING) {
        return t.task.toLocaleLowerCase().includes(searchTerm) && !t.isDone;
      } else {
        return t.task.toLocaleLowerCase().includes(searchTerm);
      } 
    });

    return filtered;
  };

  const clearFilters = () => {
    setFilter(EFilters.NONE);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        saveTask,
        deleteTask,
        editTask,
        defineTaskStatus,
        filterTasksByStatus,
        filter,
        setFilter,
        clearFilters,
        searchTask,
      }}
    >
      <ToastContainer autoClose={3000} />
      {children}
    </TasksContext.Provider>
  );
}
