import { useContext } from "react"
import { TaskContext } from "context/TaskContext";

export function useTaskContext() {
  return useContext(TaskContext);
}