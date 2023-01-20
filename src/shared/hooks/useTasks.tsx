import { useContext } from 'react';
import { TasksContext } from '../../context/tasks.context';

export function useTransactions() {
  const context = useContext(TasksContext);

  return context;
}