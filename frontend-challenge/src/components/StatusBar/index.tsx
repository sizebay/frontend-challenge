import React from "react";
import { TodoType } from "../../types/TodoType";
import { Progress, Total } from "./styles";

type StatusBarProps = {
  todos: Array<TodoType>;
}

const StatusBar = (props: StatusBarProps) => {
  const { todos } = props;
  const total = todos.length;
  const done = todos.filter((todo) => todo.done).length;
  const progress = Math.round((done / total) * 100);

  return (
    <div>
      <Total>
        <Progress style={{width: `${isNaN(progress) ? 0 : progress}%`}}>
          <span></span>
        </Progress>
      </Total>
    </div>
  );
};

export default StatusBar;
