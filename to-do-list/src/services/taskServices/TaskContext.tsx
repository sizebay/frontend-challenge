import React, { createContext, useState } from 'react';
import { ITaskData } from '../../interfaces/ITaskData';

interface ITaskContext {
  taskData: ITaskData[];
  setTaskData: React.Dispatch<React.SetStateAction<ITaskData[]>>;
}

export const TaskContext = createContext<ITaskContext | undefined>(undefined);

export const TaskContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [taskData, setTaskData] = useState<ITaskData[]>([]);

  return (
    <TaskContext.Provider value={{ taskData, setTaskData }}>
      {children}
    </TaskContext.Provider>
  );
};
