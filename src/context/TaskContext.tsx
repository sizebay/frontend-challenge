import { createContext, ReactNode, useEffect, useState } from "react";
import uuid from "react-uuid";
import { Done, ITask } from "../@types/task";

interface ContextProps {
  taskList: ITask[];
  query: string;
  filter: Done;
  createTask: (title: string) => void;
  removeTask: (id: string) => void;
  editTask: (title: string, id: string) => void;
  completeTask: (id: string) => void;
  handleFilter: (filter: Done) => void;
  handleQuery: (query: string) => void;
}

interface ProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<ContextProps>({} as any);

export function TaskProvider({ children }: ProviderProps) {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Done>("");

  const recoveredTasks = localStorage.getItem("taskList");

  const createTask = (title: string) => {
    setTaskList((state) => {
      return [...state, { title, id: uuid(), done: false }];
    });
  };

  const removeTask = (id: string) => {
    setTaskList((state) => state.filter((item) => item.id !== id));
  };

  const editTask = (title: string, id: string) => {
    setTaskList((state) =>
      state.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title,
          };
        }
        return task;
      })
    );
  };

  const completeTask = (id: string) => {
    setTaskList((state) =>
      state.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: true,
          };
        }
        return task;
      })
    );
  };

  const handleFilter = (filterSelected: Done) => setFilter(filterSelected);

  const handleQuery = (newQuery: string) => setQuery(newQuery);

  useEffect(() => {
    if (recoveredTasks) {
      setTaskList(JSON.parse(recoveredTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <TaskContext.Provider
      value={{
        taskList,
        filter,
        query,
        createTask,
        completeTask,
        editTask,
        removeTask,
        handleFilter,
        handleQuery,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
