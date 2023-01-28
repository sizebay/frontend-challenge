import { nanoid } from "nanoid";

export const addTask = (setTasks, content) => {
    setTasks(prevTasks => [...prevTasks, {content, id:nanoid(), done:false}]);
}

export const deleteTask = (setTasks, id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
}

export const finishTask = (setTasks, id) => {
    setTasks(prevTasks => prevTasks.map(task => task.id === id ? {...task, done:true} : task ));
}

export const editTask = (setTasks, id, content) => {
    setTasks(prevTasks => prevTasks.map(task => task.id === id ? {...task, content} : task))
}