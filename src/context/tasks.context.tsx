import { createContext, ReactNode, useState } from 'react';
import {v4 as uuid} from 'uuid';

import { ITask } from '../interfaces/ITask';

interface TasksContextData {
  tasks: ITask[]
  create: (content: string) => void
  edit: (id: string, content: string) => void
  toggleComplete: (id: string) => void
  remove: (id: string) => void
}

interface TasksProviderProps {
  children: ReactNode;
}

export const TasksContext = createContext<TasksContextData>(
  {} as TasksContextData
);

export function TasksProvider({children}: TasksProviderProps) {
  const [tasks, setTasks] = useState<ITask[]>(
    [
      {id: 'uuid fake',content: 'teste', completed: false},
    ]
  );

  const create = (content: string) => {
    console.log(content);
    
    const newTask: ITask = {
      id: uuid(),
      content,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const edit = (id: string,content: string) => {
    const editedTasksArr = tasks.map((task) => {
      if (task.id === id) {
        task.content = content;
      }

      return task;
    });
    setTasks([...editedTasksArr]);
  };

  const remove = (id: string) => {
    const filteredArray = tasks.filter((task) => task.id !== id);

    setTasks([...filteredArray]);
  };

  const toggleComplete = (id: string) => {
    const editedTasksArr = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }

      return task;
    });
    setTasks([...editedTasksArr]);
  };

  return (
    <TasksContext.Provider value={
      {
        tasks,
        create,
        edit,
        remove,
        toggleComplete
      }
    }>
      {children}
    </TasksContext.Provider>
  );
}