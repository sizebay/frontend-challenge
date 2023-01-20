import { useContext } from 'react';
import { TasksContext } from '../../context/tasks.context';

export function useTasks() {
  const context = useContext(TasksContext);

  return context;
}