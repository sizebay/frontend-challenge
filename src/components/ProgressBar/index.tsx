import React from "react";
import { ProgressContainer, ProgressFiller } from "./style";
import { ThemeProvider } from "styled-components";
import { TaskItem } from "../../types/task";

export default function ProgressBar(props: {
  taskList: TaskItem[];
}) {
  const calculatePercentage = (taskList: TaskItem[]) => {
    const completedTasks = taskList.filter((t) => t.isDone);
     return (completedTasks.length / taskList.length) * 100;
  }

  const theme = {
    completed: calculatePercentage(props.taskList)
  };

  return (
    <ThemeProvider theme={theme}>
      <ProgressContainer>
        <ProgressFiller />
      </ProgressContainer>
    </ThemeProvider>
  );
}
