import { Tasks } from "../../App";

export interface TasksContentComponentProps {
  CurrentTasks: () => Tasks[];
  removeTask: (args: number) => void;
  setDoneTask: (args: number) => void;
  editTask: (args: Tasks) => void;
  setDirectionRender: React.Dispatch<React.SetStateAction<string>>;
}
