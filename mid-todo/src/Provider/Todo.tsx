import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

interface TodoType {
  id: number,
  text: string,
  isCompleted: boolean
}

interface TaskTodoInterface {
  todoTask: TodoType[]
  addTask: Dispatch<SetStateAction<TodoType[]>>
  completeTask: Dispatch<SetStateAction<Boolean>>
  removeTask: Dispatch<SetStateAction<TodoType[]>>
}

const TodoContext = createContext<TaskTodoInterface>({} as TaskTodoInterface);

type TodoProviderProps = {
  children: ReactNode
}

export function TodoProvider ({ children }: TodoProviderProps) {
  const [todo, setTodoTask] = useState<TodoType[]>([]);

  const value: TaskTodoInterface = {
    todoTask: todo,
    addTask: setTodoTask,
    completeTask: () => {},
    removeTask: () => {}
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
};

export const useTodoProvider = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('verifique o uso do useTodoProvider');
  }
  return context;
};