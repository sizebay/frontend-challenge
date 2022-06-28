import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

interface TasksContextProviderType {
    children: ReactNode
}

interface TasksContextContextType {
    allTasks: TasksType[],
    completedTasks: TasksType[],
    activeFilter: TasksType[],
    setActiveFilter: Dispatch<SetStateAction<TasksType[]>>,
    createNewTask: (newTask: string) => void,
    deleteTask: (id: number) => void,
    completeTask: (id: number) => void,
    handleSetActiveFilters: (tag: string) => void,
    editTaskTitle: (id: number, newTitle: string) => void,
}

interface TasksType {
    id: number;
    title: string;
    completed: boolean;
}

const TasksContextContext = createContext({} as TasksContextContextType)

export function TasksContextProvider({ children }: TasksContextProviderType) {

    const [allTasks, setAllTasks] = useState<TasksType[]>([])
    const [completedTasks, setCompletedTasks] = useState<TasksType[]>([])
    const [pendingTasks, setPendingTasks] = useState<TasksType[]>([])
    const [activeFilter, setActiveFilter] = useState(allTasks)

    function createNewTask(newTask: string) {
        setAllTasks([{
            id: Date.now(),
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

    function editTaskTitle(id: number, newTitle: string) {
        setAllTasks(allTasks.map(task =>
            id === task.id ?
                { ...task, title: newTitle } :
                task))
    }

    function handleSetActiveFilters(tag: string) {
        if (tag === 'done') { return setActiveFilter(completedTasks) }
        if (tag === 'pending') { return setActiveFilter(pendingTasks) }
        if (tag === 'all') { return setActiveFilter(allTasks) }
        return allTasks
    }

    useEffect(() => {
        setCompletedTasks(allTasks.filter(task => task.completed === true))
        setPendingTasks(allTasks.filter(task => task.completed === false))
    }, [allTasks])

    useEffect(() => {
        setActiveFilter(allTasks)
    }, [allTasks])

    return (
        <TasksContextContext.Provider value={{
            allTasks,
            completedTasks,
            activeFilter,
            setActiveFilter,
            createNewTask,
            deleteTask,
            completeTask,
            handleSetActiveFilters,
            editTaskTitle
        }}>
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