import { ITask } from "./task.interface";

export interface ITaskContext {
  currentStatus: string;
  searchTask: string;
  setCurrentStatus: (value: string) => void;
  setSearchTask: (value: string) => void;
  removeFilter: () => void;
  onDeleteTask: (id: string) => void;
  onEditTask: (newContent: string, id: string) => void;
  onConfirmTask: (id: string) => void;
  onCreateTask: (content: string) => void;
  filteredTasks: ITask[];
  tasks: ITask[];
}