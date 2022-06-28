import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface TasksContextProviderType {
    children: ReactNode
}

interface TasksContextContextType {
    allTasks: TasksType[],
    completedTasks: TasksType[],
    pendingTasks: TasksType[],
    createNewTask: (newTask: string) => void,
    deleteTask: (id: number) => void,
    completeTask: (id: number) => void,
}

interface TasksType {
    id: number;
    title: string;
    completed: boolean;
}

const TasksContextContext = createContext({} as TasksContextContextType)

export function TasksContextProvider({ children }: TasksContextProviderType) {

    const [allTasks, setAllTasks] = useState<TasksType[]>([])
    const [tasks, settasks] = useState<TasksType[]>([])
    const [completedTasks, setCompletedTasks] = useState<TasksType[]>([])
    const [pendingTasks, setPendingTasks] = useState<TasksType[]>([])

    function createNewTask(newTask: string) {
        setAllTasks([{
            id: allTasks.length + 1,
            title: newTask,
            completed: false
        }, ...allTasks])
    }

    function deleteTask(taskId: number) {
        setAllTasks(allTasks.filter(
            task => task.id !== taskId
        ))
    }

    function completeTask(taskId: number) {
        setAllTasks(allTasks.map(task =>
            task.id === taskId ?
                { ...task, completed: !task.completed } :
                task))
    }

    useEffect(() => {
        setCompletedTasks(allTasks.filter(task => task.completed === true))
        setPendingTasks(allTasks.filter(task => task.completed === false))
    }, [allTasks])

    return (
        <TasksContextContext.Provider value={{ allTasks, pendingTasks, completedTasks, createNewTask, deleteTask, completeTask }}>
            {children}
        </TasksContextContext.Provider>
    );
}

export function useTasks() {
    const context = useContext(TasksContextContext)
    if (!context) {
        throw new Error('useTasks must be used within a TasksContextProvider')
    }
    return context
}