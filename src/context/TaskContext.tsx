import { createContext, useContext, useState, useEffect } from 'react';

export interface TaskProps {
    id: number;
    completed: boolean;
    taskText: string;
}

export enum FilterType {
    None = 'none',
    Done = 'done',
    Pending = 'pending',
}

export interface FilterProps {
    activeFilter: FilterType;
    filterText: string;
}

interface TaskContextProps {
    tasks: TaskProps[];
    setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
    filtersState: FilterProps;
    setFiltersState: React.Dispatch<React.SetStateAction<FilterProps>>;
    addTask: (taskText: string) => void;
    deleteTask: (taskId: number) => void;
    toggleDone: (taskId: number) => void;
    editTask: (taskId: number, newText: string) => void;
    clearFilters: () => void;
    filterTasks: () => TaskProps[];
    progressPercentage: number;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTaskContext must be utilized within a TaskProvider component.');
    }
    return context;
};

export const TaskProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [filtersState, setFiltersState] = useState<FilterProps>({
        activeFilter: FilterType.None,
        filterText: ''
    });

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (taskText: string) => {
        const newTask: TaskProps = {
            id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
            completed: false,
            taskText: taskText
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (taskId: number) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const toggleDone = (taskId: number) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const editTask = (taskId: number, newText: string) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, taskText: newText };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const clearFilters = () => {
        setFiltersState({
            activeFilter: FilterType.None,
            filterText: ''
        });
    };

    const filterTasks = () => {
        const { activeFilter, filterText } = filtersState;
        const filterTextLower = filterText.toLowerCase();
        // console.log(filterTextLower)
        return tasks.filter(task => {
            const taskText = task.taskText.toLowerCase();

            if (activeFilter === FilterType.Done) {
                return task.completed && taskText.includes(filterTextLower);
            }

            if (activeFilter === FilterType.Pending) {
                return !task.completed && taskText.includes(filterTextLower);
            }

            return taskText.includes(filterTextLower);
        });
    };

    const progressPercentage = tasks.length > 0 ? (tasks.filter(task => task.completed).length / tasks.length) * 100 : 0;

    return (
        <TaskContext.Provider value={{ tasks, setTasks, filtersState, setFiltersState, addTask, deleteTask, toggleDone, editTask, clearFilters, filterTasks, progressPercentage }}>
            {children}
        </TaskContext.Provider>
    );
};
