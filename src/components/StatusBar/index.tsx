import React from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { Background, ProgressBar, Wrapper, Message } from "./styles";

function StatusBar() {
  const { completed } = React.useContext(TaskContext);

  return (
    <Wrapper>
      <Background>
        <ProgressBar progress={completed} />
        {completed === 100 && <Message>CONGRATULATIONS!</Message>}
      </Background>
    </Wrapper>
  );
}

export default StatusBar;
