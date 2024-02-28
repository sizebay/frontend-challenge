import { Tasks } from "../../App";

export interface ComponentTasksProps {
  task: Tasks;
  removeTask: (args: number) => void;
  setDoneTask: (args: number) => void;
  editTask: (args: Tasks) => void;
  setDirectionRender: React.Dispatch<React.SetStateAction<string>>;
}
