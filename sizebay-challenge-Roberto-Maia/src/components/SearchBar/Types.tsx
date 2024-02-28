import { Tasks } from "../../App";

export interface SearchBarProps {
  setTaskFilter: React.Dispatch<React.SetStateAction<Tasks[]>>;
  taskRender: Tasks[];
  setDirectionRender: React.Dispatch<React.SetStateAction<string>>;
}
