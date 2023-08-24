import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

interface TodoType {
  id: number,
  text: string,
  isCompleted: boolean
}

interface TaskTodoInterface {
  todoTask: TodoType[]
  addTask: Dispatch<SetStateAction<TodoType[]>>
  filterType: string
  setFilterType: Dispatch<SetStateAction<string>>
  filteredTasks: TodoType[]
  isFilterOn: boolean
  setIsFilterOn: Dispatch<SetStateAction<boolean>>
  isFilterDone: boolean
  setIsDone: Dispatch<SetStateAction<boolean>>
  isFilterPending: boolean
  setIsPending: Dispatch<SetStateAction<boolean>>
  setFilteredTasks: Dispatch<SetStateAction<TodoType[]>>
  completeTask: Dispatch<SetStateAction<Boolean>>
  removeTask: Dispatch<SetStateAction<TodoType[]>>
}

const TodoContext = createContext<TaskTodoInterface>({} as TaskTodoInterface);

type TodoProviderProps = {
  children: ReactNode
}

export function TodoProvider ({ children }: TodoProviderProps) {
  const [todo, setTodoTask] = useState<TodoType[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<TodoType[]>([]);
  const [filterType, setFilterType] = useState<string>('');
  const [isFilterOn, setIsFilterOn] = useState<boolean>(false);
  const [isFilterDone, setIsDone] = useState<boolean>(false);
  const [isFilterPending, setIsPending] = useState<boolean>(false);

  const value: TaskTodoInterface = {
    todoTask: todo,
    addTask: setTodoTask,
    filteredTasks: filteredTasks,
    setFilteredTasks:setFilteredTasks,
    filterType: filterType,
    setFilterType: setFilterType,
    isFilterOn: isFilterOn,
    setIsFilterOn: setIsFilterOn,
    isFilterDone: isFilterDone,
    setIsDone: setIsDone,
    isFilterPending: isFilterPending,
    setIsPending: setIsPending,
    completeTask: () => {},
    removeTask: () => {}
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
};

export function useTodoProvider() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('verifique o uso do useTodoProvider');
  }
  return context;
};
