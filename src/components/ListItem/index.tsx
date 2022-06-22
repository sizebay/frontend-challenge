import { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineMinusCircle } from "react-icons/ai";

import { Task, useTasks } from "../../providers/Tasks";
import { Wrapper } from "./styles";

interface ListItemProps {
  task: Task;
}

const ListItem = ({ task }: ListItemProps) => {
  const [inputValue, setInputValue] = useState(task.description);

  const { editTask } = useTasks();

  useEffect(() => {
    if (inputValue && inputValue !== task.description) {
      editTask(task, inputValue);
    }
  }, [inputValue]);

  return (
    <Wrapper>
      <div className="description-container">
        <input
          placeholder={inputValue}
          type="text"
          value={inputValue}
          onChange={({ target: { value } }) => setInputValue(value)}
        />
        <div className="subtitle">Edit task</div>
      </div>
      <div className="buttons-container">
        <button className="remove-task-btn">
          <AiOutlineMinusCircle />
        </button>
        <button className="complete-task-btn">
          <AiOutlineCheckCircle />
        </button>
      </div>
    </Wrapper>
  );
};

export default ListItem;
