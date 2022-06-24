import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

interface AllTodosProviderType {
    children: ReactNode
}

interface AllTodosContextType {
    todos: TodosType[]
    allTodos: TodosType[]
    setAllTodos: Dispatch<SetStateAction<TodosType[]>>
    setTodos: Dispatch<SetStateAction<TodosType[]>>
}


interface TodosType {
    id: number;
    text: string;
    completed: boolean;
}

const AllTodosContext = createContext({} as AllTodosContextType)

export function AllTodosProvider({ children }: AllTodosProviderType) {

    const [allTodos, setAllTodos] = useState<TodosType[]>([]);
    const [todos, setTodos] = useState<TodosType[]>([]);

    useEffect(() => {
        setTodos(allTodos)
    }, [allTodos])

    return (
        <AllTodosContext.Provider value={{ todos, setTodos, allTodos, setAllTodos }}>
            {children}
        </AllTodosContext.Provider>
    );
}

export function useAllTodos() {
    const context = useContext(AllTodosContext)
    if (!context) {
        throw new Error('useAllTodos must be used within a AllTodosProvider')
    }
    return context
}