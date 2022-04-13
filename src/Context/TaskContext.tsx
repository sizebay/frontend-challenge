import React, { createContext, useEffect } from 'react';
import { Task } from '../Models/Task';

interface Props {
    children: React.ReactNode;
}

type TaskContextType = {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    filteredTasks: Task[];
    setFilteredTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    currentStatus: string;
    setCurrentStatus: React.Dispatch<React.SetStateAction<string>>;
    percentage: number;
    setPercentage: React.Dispatch<React.SetStateAction<number>>;
    createTask: (description: string) => void;
    deleteTask: (task: Task) => void;
    updateTask: (task: Task, description: string) => void;
    completeTask: (task: Task) => void;
    updateFilteredTasks: (status: string) => void;
}

export const TaskContext = createContext<TaskContextType>({
    tasks: [],
    setTasks: () => { },
    filteredTasks: [],
    setFilteredTasks: () => { },
    search: '',
    setSearch: () => { },
    currentStatus: '',
    setCurrentStatus: () => { },
    percentage: 0,
    setPercentage: () => { },
    createTask: () => { },
    deleteTask: () => { },
    updateTask: () => { },
    completeTask: () => { },
    updateFilteredTasks: () => { },
});

export function TaskProvider(props: Props) {

    const [tasks, setTasks] = React.useState<Task[]>([]);
    const [filteredTasks, setFilteredTasks] = React.useState<Task[]>([]);
    const [search, setSearch] = React.useState<string>('');
    const [percentage, setPercentage] = React.useState<number>(0);
    const [currentStatus, setCurrentStatus] = React.useState<string>('');

    useEffect(() => {
        updateFilteredTasks();
        updatePercentage();
    }, [tasks, search, currentStatus])

    const createTask = (description: string) => {
        let task = new Task(description);
        setTasks([...tasks, task]);
    }

    const deleteTask = (task: Task) => {
        let tempTasks = tasks.filter(t => t.id !== task.id);
        setTasks(tempTasks);
    }

    const updateTask = (task: Task, description: string) => {
        let tempTasks = tasks.map(currentTask => {
            if (currentTask.id === task.id) {
                currentTask.description = description;
            }
            return currentTask;
        });
        setTasks(tempTasks);
    }

    const completeTask = (task: Task) => {
        let tempTasks = tasks.map(currentTask => {
            if (currentTask.id === task.id) {
                currentTask.status = 'done';
            }
            return currentTask;
        });
        setTasks(tempTasks);
    }

    const updateFilteredTasks = () => {
        let tempFilteredTask = tasks.filter(task => {
            if(currentStatus === 'pending' || currentStatus === '') {
                return task.status !== 'done';
            } else {
                return task.status === 'done';
            }
        })

        if(search !== '') {
            tempFilteredTask = tempFilteredTask.filter(task => {
                return task.description.toLowerCase().includes(search.toLowerCase());
            });
        }

        setFilteredTasks(tempFilteredTask);
    }

    const updatePercentage = () => {
        let percentage = 0;
        if (tasks.length > 0) {
            percentage = Math.round((tasks.filter(task => task.status === 'done').length / tasks.length) * 100);
        }
        setPercentage(percentage);
    }

    return (
        <TaskContext.Provider 
            value={{
                tasks,
                setTasks,
                filteredTasks,
                setFilteredTasks,
                search,
                setSearch, 
                currentStatus,
                setCurrentStatus,
                percentage,
                setPercentage,
                createTask,
                deleteTask,
                updateTask,
                completeTask,
                updateFilteredTasks,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}