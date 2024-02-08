import React, { ReactNode, createContext, useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import useTasks from "../../hooks/useTasks";
import { TaskItem } from "../../types/task";
import { saveToLocalStorage } from "../../helpers/localStorage";
import { ToastContainer, toast } from "react-toastify";
import { EFilters } from "../../types/filters";

interface TasksContextProps {
  tasks: TaskItem[];
  tasksFiltered: TaskItem[];
  saveTask: (task: string) => void;
  deleteTask: (index: number) => void;
  defineTaskStatus: (index: number) => void;
  filterTasksByStatus: (status: EFilters) => void;
  filter: EFilters;
  clearFilters: () => void;
  searchTask: (input: string) => void;
  isFiltered: boolean;
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
  const [lastId, setLastId] = useState(0);
  const [filter, setFilter] = useState(EFilters.NONE);
  const [tasksFiltered, setTasksFiltered] = useState<TaskItem[]>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  const saveTask = (task: string) => {
    if (task === "") {
      return;
    }

    const newTask: TaskItem = {
      id: lastId + 1,
      task: task,
      isDone: false,
    };

    const newTaskList = [...tasks, newTask];
    setTasks(newTaskList);
    setLastId(newTask.id);
    saveToLocalStorage("taskList", newTaskList);
    if (isFiltered && filter === EFilters.PENDING) {
      setTasksFiltered((prevList) => [...prevList, newTask]);
    }
  };

  const deleteTask = (index: number) => {
    setTasks((prevList) => {
      const updatedList = prevList.filter((t) => t.id !== index);
      saveToLocalStorage("taskList", updatedList);
      if (!updatedList.length) {
        localStorage.clear();
      }
      return updatedList;
    });

    if (filter !== EFilters.NONE) {
      setTasksFiltered((prevList) => prevList.filter((t) => t.id !== index));
    }
  };

  const defineTaskStatus = (index: number) => {
    setTasks((prevList) => {
      const updatedList = prevList.map((task) =>
        task.id === index ? { ...task, isDone: true } : task
      );
      const allIsDone = updatedList.every((t) => t.isDone === true);
      if (allIsDone) {
        toast("All done!");
      }
      saveToLocalStorage("taskList", updatedList);
      return updatedList;
    });

    if (filter !== EFilters.NONE) {
      setTasksFiltered((prevList) => prevList.filter((t) => t.id !== index));
    }
  };

  const filterTasksByStatus = (status: EFilters) => {
    const isSameFilter = status === filter;
    const filteredByStatus: TaskItem[] = tasks.filter(
      (task: { isDone: boolean }) =>
        status === EFilters.DONE ? task.isDone : !task.isDone
    );

    setFilter(isSameFilter ? EFilters.NONE : status);
    setIsFiltered(isSameFilter ? false : true);
    setTasksFiltered(filteredByStatus);
  };

  const searchTask = (input: string) => {
    const searchTerm = input.toLocaleLowerCase();
    const filtered = tasks.filter((t) => {
      if (filter === EFilters.DONE) {
        return t.task.toLocaleLowerCase().includes(searchTerm) && t.isDone;
      } else if (filter === EFilters.PENDING) {
        return t.task.toLocaleLowerCase().includes(searchTerm) && !t.isDone;
      } else if (filter === EFilters.NONE) {
        return t.task.toLocaleLowerCase().includes(searchTerm);
      }
    });
    setIsFiltered(true);
    setTasksFiltered(filtered);
    input === "" && setFilter(filter);
  };

  const clearFilters = () => setIsFiltered(false);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        saveTask,
        deleteTask,
        defineTaskStatus,
        filterTasksByStatus,
        filter,
        tasksFiltered,
        clearFilters,
        searchTask,
        isFiltered,
      }}
    >
      <ToastContainer autoClose={3000} />
      {children}
    </TasksContext.Provider>
  );
}
