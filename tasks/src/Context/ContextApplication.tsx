import { createContext, ReactNode, useEffect, useState } from "react";

interface ContextApplicationProviderProps {
  children: ReactNode;
}

export interface ITask {
  id: string;
  content: string;
  isCompleted: boolean;
}

interface ContextApplicationType{
tasks: ITask[];
taskActive: string;
componentEditTask: boolean;
setComponentEditTask: (value: boolean) => void;
setIdTask: (taskId: string) => void;
addTask: (text: string) => void;
deleteTask: (taskId: string) => void;
editTask: (text: string) => void;
completeTask: (taskId: string) => void;
tasksActive: (value: string) => void;
}

const Tasks_STORAGE_KEY = "Tasks:likedItems";

export const ContenxtApplication = createContext({} as ContextApplicationType);

export function ContenxtApplicationProvider({ children }: ContextApplicationProviderProps) {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    if (typeof window !== 'undefined') {
      const storedTasks = localStorage.getItem(Tasks_STORAGE_KEY);
      if (storedTasks) {
        return JSON.parse(storedTasks);
      }
    }
    return []
  });
  const [componentEditTask, setComponentEditTask] = useState(false);
  const [idTask, setIdTask] = useState('');
  const [taskActive, setTaskActive] = useState('');

  useEffect(() => {
    localStorage.setItem(Tasks_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text: string){
    setTasks([...tasks, {
      id: crypto.randomUUID(),
      content: text,
      isCompleted: false
    }])
  }

  function deleteTask(taskId: string){
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskId)
    setTasks(tasksWithoutDeletedOne);
  }

  function editTask(text: string){
    setComponentEditTask(true);
    const newTask = tasks.map((task) => {
      if(task.id == idTask){
        return{
        ...task,
        content: text,
      }
    }
      return task;
    });
    setTasks(newTask);
  }

  function completeTask(taskId: string){
    const completeTask = tasks.map((task) => {
      if(task.id == taskId){
        return{
        ...task,
        isCompleted: !task.isCompleted,
      }
    }
      return task;
    });
    setTasks(completeTask);
  }

  function tasksActive(value: string){
    setTaskActive(value);
  }

  return (
    <ContenxtApplication.Provider value={{ tasks, taskActive, componentEditTask, setComponentEditTask, setIdTask, addTask, editTask, deleteTask, completeTask, tasksActive  }}>
      {children}
    </ContenxtApplication.Provider>
  );
}