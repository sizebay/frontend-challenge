import { FormEvent, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

import { Task, useTasks } from "../../providers/Tasks";
import { Wrapper } from "./styles";

const AddItemInput = () => {
  const [inputValue, setInputValue] = useState("");

  const { addTask } = useTasks();

  const handleSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask: Task = {
      id: uuidv4(),
      description: inputValue,
      done: false,
    };

    addTask(newTask);
  };

  return (
    <Wrapper onSubmit={handleSubmission}>
      <div>
        <input
          type="text"
          placeholder="Add new item..."
          value={inputValue}
          onChange={({ target: { value } }) => setInputValue(value)}
        />
      </div>
      <button type="submit">
        <AiFillPlusCircle />
      </button>
    </Wrapper>
  );
};

export default AddItemInput;
