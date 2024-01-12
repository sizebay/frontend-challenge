import { useState } from "react";
import { AddTaskContainer, AddTaskForm, AddTaskInput } from "./styles";
import TaskButton from "../TaskButtons";
import { FaCirclePlus } from "react-icons/fa6";
import ITasks from "../../types/ITasks";
import { v4 as uuidv4 } from "uuid";

interface Props {
  tasksDb: ITasks[] | null;
  addNewTask: (task: ITasks) => void;
}

const AddTaskBar = ({ tasksDb, addNewTask }: Props) => {
  const [editing, setIsEditing] = useState("notActive");
  const editNotActive = editing === "notActive";

  const editTask = () => {
    setIsEditing(editNotActive ? "active" : "notActive");
  };

  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (taskDescription.trim() !== "") {
      const newTask: ITasks = {
        id: uuidv4(),
        description: taskDescription,
        isCompleted: false,
      };
      addNewTask(newTask);
      setTaskDescription("");
    }
  };

  return (
    <AddTaskContainer
      onClick={editTask}
      styleBackground={editNotActive ? "var(--white-darker)" : "var(--white)"}
      styleBorder={editNotActive ? "var(--grey)" : "var(--white)"}
    >
      <AddTaskForm onSubmit={handleAddTask}>
        <AddTaskInput
          onChange={(e) => setTaskDescription(e.target.value)}
          value={taskDescription}
          placeholder="Add new item..."
          type="text"
        />
        <TaskButton
          type="submit"
          opacity={editNotActive ? 0.5 : 1}
          name="done"
          backgroundColor="var(--blue-light)"
        >
          <FaCirclePlus color="white" size={21} />
        </TaskButton>
      </AddTaskForm>
    </AddTaskContainer>
  );
};

export default AddTaskBar;
