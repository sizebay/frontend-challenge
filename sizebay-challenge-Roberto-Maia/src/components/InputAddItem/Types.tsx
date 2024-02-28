import { KeyboardEvent } from "react";

export interface InputAddItemProps {
  taskItem: string;
  handleKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
  setTaskItem: React.Dispatch<React.SetStateAction<string>>;
  addTasks: () => void;
}
