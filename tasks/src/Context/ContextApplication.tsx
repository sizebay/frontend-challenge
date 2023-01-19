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
functionAddTask: boolean;
setTextEditTask: string;
addTask: (text: string) => void;
deleteTask: (taskId: string) => void;
editTask: (taskId: string) => void;
searchTask: (text: string) => void;
completeTask: (taskId: string) => void;
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
  const [functionAddTask, setFunctionAddTask] = useState(true);
  const [textEditTask, setTextEditTask] = useState('');

  useEffect(() => {
    localStorage.setItem(Tasks_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text: string){
    setFunctionAddTask(true);
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

  function editTask(taskId: string){
    setFunctionAddTask(false);
    const newTask = tasks.map((task) => {
      if(task.id == taskId){
        return{
        ...task,
        content: textEditTask,
      }
    }
      return task;
    });
    setTasks(newTask);
    setFunctionAddTask(true);
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

  function searchTask(text: string){
    return tasks.filter((task) => task.content === text);
  }

  return (
    <ContenxtApplication.Provider value={{ tasks, functionAddTask, setTextEditTask, addTask, editTask, deleteTask, completeTask, searchTask  }}>
      {children}
    </ContenxtApplication.Provider>
  );
}