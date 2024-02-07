import React, { useEffect, useState } from "react";
import { ProgressContainer, ProgressFiller } from "./style";
import { ThemeProvider } from "styled-components";
import { TaskItem } from "../../types/task";

export default function ProgressBar(props: { taskList: TaskItem[] }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const calculatePercentage = () => {
      if (!props.taskList.length) {
        return setPercentage(0);
      }
      const completedTasks = props.taskList.filter((t) => t.isDone);
      const newPercentage =
        (completedTasks.length / props.taskList.length) * 100;
      setPercentage(newPercentage);
    };

    calculatePercentage();
  }, [props.taskList]);

  const theme = {
    completed: percentage,
  };

  return (
    <ThemeProvider theme={theme}>
      <ProgressContainer>
        <ProgressFiller />
      </ProgressContainer>
    </ThemeProvider>
  );
}
