import React from "react";
import { TodoType } from "../../types/TodoType";
import { Progress, Total } from "./styles";

import Confetti from "react-confetti";

type StatusBarProps = {
  todos: Array<TodoType>;
};

const StatusBar = (props: StatusBarProps) => {
  const { todos } = props;

  const total = todos.length;
  const done = todos.filter((todo) => todo.done).length;
  const progress = Math.round((done / total) * 100);

  return (
    <div>
      <Total>
        <Progress style={{ width: `${isNaN(progress) ? 0 : progress}%` }}>
          <span></span>
        </Progress>
      </Total>
      {progress === 100 && (
        <Confetti
          width={1920}
          height={1080}
          recycle={false}
          gravity={0.2}
          confettiSource={{ x: 1290, y: 380, w: 20, h: 5 }}
        />
      )}
    </div>
  );
};

export default StatusBar;
