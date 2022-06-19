import { v4 as uuidv4 } from "uuid";
import { FormEvent, useState } from "react";
import { Task, useTasks } from "../../providers/Tasks";
import { Wrapper } from "./styles";

const AddTaskInput = () => {
  const [description, setDescription] = useState("");
  const { addTask } = useTasks();

  const handleSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask: Task = {
      id: uuidv4(),
      description,
      done: false,
    };

    addTask(newTask);
  };

  return (
    <Wrapper onSubmit={handleSubmission}>
      <input
        value={description}
        onChange={({ target: { value } }) => setDescription(value)}
      />
      <button type="submit">+</button>
    </Wrapper>
  );
};

export default AddTaskInput;
