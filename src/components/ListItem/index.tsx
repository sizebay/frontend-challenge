import { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineMinusCircle } from "react-icons/ai";

import { Task, useTasks } from "../../providers/Tasks";
import { Wrapper } from "./styles";

interface iListItemProps {
  task: Task;
}

const ListItem = ({ task }: iListItemProps) => {
  const [inputValue, setInputValue] = useState(task.description);

  const { editTask, removeTask, completeTask } = useTasks();

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
      </div>
      <div className="buttons-container">
        <button className="remove-task-btn" onClick={() => removeTask(task)}>
          <AiOutlineMinusCircle />
        </button>
        <button
          className="complete-task-btn"
          onClick={() => completeTask(task)}
          disabled={task.done}
        >
          <AiOutlineCheckCircle />
        </button>
      </div>
      <div className="tooltip">
        <span>Edit task</span>
      </div>
    </Wrapper>
  );
};

export default ListItem;
