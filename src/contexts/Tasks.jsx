import {createContext, useState, useEffect} from "react";

export const TasksContext = createContext();

export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);

    const [pending, setPending] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [search, setSearch] = useState("");

    function pendingMarked() {
        setPending(!pending);
        setCompleted(false);
    }

    function completedMarked() {
        setCompleted(!completed);
        setPending(false);
    }

    function clearFilters() {
        setCompleted(false);
        setPending(false);
        setSearch("");
    }

    function createTask(title) {
        setTasks([
            ...tasks,
            {
                id: parseInt(Math.random() * 300),
                title,
                completed: false,
            },
        ]);
    }

    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    function markCompleteTask(id) {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed,
                    };
                }
                return task;
            })
        );
    }

    return (
        <TasksContext.Provider
            value={{tasks, pending, completed, search, clearFilters, setSearch, createTask, deleteTask, markCompleteTask, completedMarked, pendingMarked}}
        >
            {children}
        </TasksContext.Provider>
    );
};
