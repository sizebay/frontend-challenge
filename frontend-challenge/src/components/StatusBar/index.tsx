import React from "react";
import { TodoType } from "../../types/TodoType";
import { Progress, Total } from "./styles";
import "./index.css";

type StatusBarProps = {
  todos: Array<TodoType>;
}

const StatusBar = (props: StatusBarProps) => {
  const { todos } = props;
  const total = todos.length;
  const done = todos.filter((todo) => todo.done).length;
  const progress = `p-${Math.round((done / total) * 100)}`;
  if (progress === "p-100") {
    console.log("congrats");
  }

  return (
    <div>
      <Total>
        <Progress className={progress === "p-NaN" ? "p-0" : progress}>
          <span></span>
        </Progress>
      </Total>
    </div>
  );
};

export default StatusBar;
