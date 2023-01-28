import React, { createContext, useContext, useState, useEffect } from 'react';

const RootContext = createContext({})
export default function RootProvider({children}){
  const [tasks, setTasks] = useState([]);
  const [searchTask, setSearchTask] = useState('');
  const [filteredTasks, setFilteredTasks ] = useState([]);
  const [typeAction, setTypeAction] = useState('undone_tasks');

  useEffect(() => {
      setFilteredTasks(tasks.filter(task => typeAction === 'undone_tasks' ? !task.done : task.done)) 
  }, [tasks, typeAction])

  return <RootContext.Provider value={{tasks, setTasks, searchTask, setSearchTask, typeAction, setTypeAction, filteredTasks}}>
    {children}
  </RootContext.Provider>
}
export function useRootContext(){
  return useContext(RootContext)
}