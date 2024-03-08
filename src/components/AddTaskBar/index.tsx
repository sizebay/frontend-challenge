import { useState } from "react";
import { AddTaskContainer, AddTaskForm, AddTaskInput } from "./styles";
import TaskButton from "../TaskButtons";
import { FaCirclePlus } from "react-icons/fa6";
import { useTasksContext } from "../../context/TasksContext";
import { v4 as uuidv4 } from "uuid";

const AddTaskBar = () => {
  const { addTask } = useTasksContext();

  const [editing, setIsEditing] = useState("notActive");
  const editNotActive = editing === "notActive";

  const editTask = () => {
    setIsEditing(editNotActive ? "active" : "notActive");
  };

  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (taskDescription.trim() !== "") {
      const newTask = {
        id: uuidv4(),
        description: taskDescription,
        isCompleted: false,
      };
      addTask(newTask);
      setTaskDescription("");
    }
  };

  const handleBlur = () => {
    setIsEditing("notActive");
  };

  return (
    <AddTaskContainer
      onClick={editTask}
      onBlur={handleBlur}
      tabIndex={0}
      styleBackground={editNotActive ? "var(--white-darker)" : "var(--white)"}
      styleBorder={editNotActive ? "var(--grey)" : "var(--white)"}
    >
      <AddTaskForm onSubmit={handleAddTask}>
        <AddTaskInput
          onChange={(e) => setTaskDescription(e.target.value)}
          value={taskDescription}
          placeholder="Add new item..."
          type="text"
          colorFont={editNotActive ? "var(--grey-light)" : "var(--grey-dark)"}
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