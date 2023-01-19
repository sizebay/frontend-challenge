import {createContext, useState, useEffect} from "react";

export const TasksContext = createContext();

export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Drive a Cadillac across the Indiac sea",
            completed: false,
        },
    ]);

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

    return <TasksContext.Provider value={{tasks, createTask, deleteTask, markCompleteTask}}>{children}</TasksContext.Provider>;
};
