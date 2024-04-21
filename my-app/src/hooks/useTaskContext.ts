import { useContext } from "react"
import { TaskContext } from "context/TaskContext";

export function useTaskOperations() {
  return useContext(TaskContext);
}