import { useState } from "react";
import { AddTaskContainer, AddTaskForm, AddTaskInput } from "./styles";
import TaskButton from "../TaskButtons";
import { FaCirclePlus } from "react-icons/fa6";
import { useTasksContext } from "../../context/TasksContext";
import { v4 as uuidv4 } from "uuid";

const AddTaskBar = () => {
  const { addTask } = useTasksContext();
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

  return (
    <AddTaskContainer
      tabIndex={0}
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