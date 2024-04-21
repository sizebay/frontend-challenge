import { ReactNode,  createContext,  useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from 'uuid';

import { ITaskContext } from "types/taskContext.interface";
import { ITask } from "types/task.interface";
import { TaskStatus } from "types/taskStatus.enum";

interface ProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext({} as ITaskContext);

export const TaskContextProvider = ({ children }: ProviderProps) => {
  const { value: tasks, updateLocalStorage } = useLocalStorage<ITask[]>('tasks-list', []);

  const [currentStatus, setCurrentStatus] = useState('');
  const [searchTask, setSearchTask] = useState('');

  function removeFilter() {
    if(searchTask !== ""){
      setSearchTask('');
    }else{
      setCurrentStatus('');
    }
  };

  function onCreateTask(content: string) {
    const newTask: ITask = {
      id: uuidv4(),
      title: content,
      status: TaskStatus.Pending
    }

    const updateTasks = [...tasks, newTask];
    return updateLocalStorage(updateTasks)
  }

  function onEditTask( id: string, newContent: string) {
    const updateTasks = tasks.map(task => task.id === id ? { ...task, title: newContent } : task);
    return updateLocalStorage(updateTasks);
  }

  function onDeleteTask(id: string) {
    const updateTasks = tasks.filter(task => task.id !== id);
    return updateLocalStorage(updateTasks);
  }

  function onConfirmTask(id: string) {
    const updateTasks = tasks.map(task => task.id === id ? { ...task, status: TaskStatus.Done } : task);
    return updateLocalStorage(updateTasks);
  }

  const filterTasksByStatus = (status: string) => {
    if (!tasks) return [];
    if (status === '') return tasks;

    return tasks.filter(task => task.status === status);
  }

  const filteredTasksByStatus = filterTasksByStatus(currentStatus);
  const filteredTasks = filteredTasksByStatus.filter(task => task.title.toLocaleLowerCase().includes(searchTask.toLocaleLowerCase()));

  const value = {
    currentStatus,
    searchTask,
    setCurrentStatus,
    setSearchTask,
    removeFilter,
    onConfirmTask,
    onCreateTask,
    onDeleteTask,
    onEditTask,
    filteredTasks,
    tasks,
  }

  return (
    <TaskContext.Provider
      value={ value }>
      {children}
    </TaskContext.Provider>
  )
}