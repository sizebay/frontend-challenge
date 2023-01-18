import { createContext, ReactNode, useState } from "react";

interface ContextApplicationProviderProps {
  children: ReactNode;
}

interface ITask {
  id: string;
  content: string;
  isCompleted: boolean;
}

interface ContextApplicationType{
tasks: ITask[];
}

export const CartContext = createContext({} as ContextApplicationType);

export function CartContextProvider({ children }: ContextApplicationProviderProps) {
  const [tasks, setTasks] = useState<ITask[]>([]);

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

  function editTask(taskId: string, text: string){
    const newTask = tasks.map((task) => {
      if(task.id == taskId){
        return{
        ...task,
        isCompleted: !task.isCompleted,
      }
    }
      return task;
    });
    setTasks(newTask);
  }

  return (
    <CartContext.Provider value={{ tasks }}>
      {children}
    </CartContext.Provider>
  );
}