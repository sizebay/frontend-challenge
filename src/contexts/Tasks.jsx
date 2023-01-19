import {createContext, useState, useEffect} from "react";

export const TasksContext = createContext();

export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Tarefa Concluida",
            completed: true,
        },
        {
            id: 2,
            title: "Tarefa NÂO Concluida",
            completed: false,
        },
    ]);

    const [pending, setPending] = useState(false);
    const [completed, setCompleted] = useState(false);

    function pendingMarked() {
        setPending(!pending);
        setCompleted(false);
    }

    function completedMarked() {
        setCompleted(!completed);
        setPending(false);
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
                        completed: true,
                    };
                }
                return task;
            })
        );
    }

    return (
        <TasksContext.Provider value={{tasks, pending, completed, createTask, deleteTask, markCompleteTask, completedMarked, pendingMarked}}>
            {children}
        </TasksContext.Provider>
    );
};
