import { useEffect, useState } from "react";
import { TaskItem } from "../types/task";
import { getFromLocalStorage } from "../helpers/localStorage";

export default function useTasks() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);


  useEffect(() => {
    const storedTasks = getFromLocalStorage("taskList");

    if (storedTasks) {
      try {
        const tasks = JSON.parse(storedTasks);
        if(!tasks.length) {
          localStorage.clear();
        }
        else if (
          Array.isArray(tasks) &&
          tasks.length > 0 &&
          tasks[tasks.length - 1].id !== undefined
        ) {
          setTasks(tasks);
        } else {
          console.error("O valor armazenado não é um array válido.");
        }
      } catch (error) {
        console.error("Erro ao fazer o parse do JSON:", error);
      }
    }
  }, []);

  return { tasks, setTasks };
}
