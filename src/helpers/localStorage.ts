import { TaskItem } from "../types/task";

export const saveToLocalStorage = (key: string, tasks: TaskItem[]) => localStorage.setItem(key, JSON.stringify(tasks));

export const getFromLocalStorage = (key: string) => localStorage.getItem(key);