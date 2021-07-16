import React, { ReactElement } from "react";
import { Task } from "../models/Task";

interface Props {
  children: ReactElement;
}

type TaskContextType = {
  taskItems: Task[];
  setTaskItems?: () => void;
  statusFilter: string;
  setStatusFilter?: () => void;
  textFilter: string;
  setTextFilter?: () => void;
  completed: number;
  add: (title: string) => void;
  finish: (task: Task) => void;
  undo: (task: Task) => void;
  remove: (task: Task) => void;
  update: (task: Task, title: string) => void;
  statusFilterCb: (filter: string) => void;
  textFilterCb: (filter: string) => void;
  clearFilters: () => void;
};

export const TaskContext = React.createContext<TaskContextType>({
  taskItems: [],
  setTaskItems: () => null,
  statusFilter: "",
  setStatusFilter: () => null,
  textFilter: "",
  setTextFilter: () => null,
  completed: 0,
  add: () => null,
  finish: () => null,
  undo: () => null,
  remove: () => null,
  update: () => null,
  statusFilterCb: () => null,
  textFilterCb: () => null,
  clearFilters: () => null,
});

export function TaskProvider(props: Props) {
  const { children } = props;

  const [taskItems, setTaskItems] = React.useState<Task[]>([]);
  const [statusFilter, setStatusFilter] = React.useState("");
  const [textFilter, setTextFilter] = React.useState("");

  const statusFilterCb = (filter: string) => {
    setStatusFilter(filter);
  };

  const textFilterCb = (filter: string) => {
    setTextFilter(filter);
  };

  const clearFilters = () => {
    setTextFilter("");
  };

  const completed =
    (taskItems.filter((item) => item.done === true).length / taskItems.length) *
    100;

  const add = (title: string) => {
    if (title.trim()) {
      const taskItem = new Task(title);

      setTaskItems([...taskItems, taskItem]);
    }
  };

  const finish = (task: Task) => {
    const index = taskItems.findIndex((item) => item.id === task.id);
    if (index > -1) {
      const item = taskItems[index];
      item.finish();

      const itemsUpdated = [...taskItems];
      itemsUpdated.splice(index, 1, item);
      setTaskItems(itemsUpdated);
    }
  };

  const undo = (task: Task) => {
    const index = taskItems.findIndex((item) => item.id === task.id);
    if (index > -1) {
      const item = taskItems[index];
      item.undo();

      const itemsUpdated = [...taskItems];
      itemsUpdated.splice(index, 1, item);
      setTaskItems(itemsUpdated);
    }
  };

  const remove = (task: Task) => {
    const index = taskItems.findIndex((item) => item.id === task.id);
    if (index > -1) {
      const itemsUpdated = [...taskItems];
      itemsUpdated.splice(index, 1);
      setTaskItems(itemsUpdated);
    }
  };

  const update = (task: Task, newTitle: string) => {
    const index = taskItems.findIndex((item) => item.id === task.id);
    if (index > -1) {
      const item = taskItems[index];
      item.update(newTitle);

      const itemsUpdated = [...taskItems];
      itemsUpdated.splice(index, 1, item);
      setTaskItems(itemsUpdated);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        taskItems,
        statusFilter,
        textFilter,
        completed,
        add,
        finish,
        undo,
        remove,
        update,
        statusFilterCb,
        textFilterCb,
        clearFilters,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
