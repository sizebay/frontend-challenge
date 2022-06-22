import { createContext, useContext, useState, ReactNode } from "react";

export type Task = {
  id: string;
  description: string;
  done: boolean;
};

interface iTasksProviderData {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (task: Task) => void;
  completeTask: (task: Task) => void;
  editTask: (task: Task, newDescription: string) => void;
  percentageCompletedTasks: number;
}

interface iTasksContextProps {
  children: ReactNode;
}

const TasksContext = createContext<iTasksProviderData>(
  {} as iTasksProviderData
);

export const TasksProvider = ({ children }: iTasksContextProps) => {
  const initialState = JSON.parse(localStorage.getItem("tasks") || "[]");
  const [tasks, setTasks] = useState<Task[]>(initialState as Task[]);

  const getPercentageOfCompletedTasks = (tasks: Task[]) => {
    const doneTasks = tasks.filter(({ done }) => done);
    return (100 * doneTasks.length) / tasks.length || 0;
  };

  const [percentageCompletedTasks, setPercentageCompletedTasks] = useState(
    getPercentageOfCompletedTasks(tasks)
  );

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
    setPercentageCompletedTasks(
      getPercentageOfCompletedTasks([...tasks, task])
    );
  };

  const removeTask = ({ id: idTaskToBeRemoved }: Task) => {
    const tasksUpdated = tasks.filter(({ id }) => id !== idTaskToBeRemoved);

    setTasks(tasksUpdated);
    localStorage.setItem("tasks", JSON.stringify(tasksUpdated));
    setPercentageCompletedTasks(getPercentageOfCompletedTasks(tasksUpdated));
  };

  const completeTask = ({ id: idTaskToComplete }: Task) => {
    const index = tasks.findIndex(({ id }) => id === idTaskToComplete);

    tasks[index].done = true;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setPercentageCompletedTasks(getPercentageOfCompletedTasks(tasks));
  };

  const editTask = ({ id: idTaskToEdit }: Task, newDescription: string) => {
    if (newDescription) {
      const index = tasks.findIndex(({ id }) => id === idTaskToEdit);

      tasks[index].description = newDescription;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      setPercentageCompletedTasks(getPercentageOfCompletedTasks(tasks));
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        completeTask,
        editTask,
        percentageCompletedTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
