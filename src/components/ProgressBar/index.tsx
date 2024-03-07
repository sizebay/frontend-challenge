import React, { useEffect, useState } from "react";
import { linearProgressClasses, styled, LinearProgress } from "@mui/material";
import { useTasksContext } from "../../context/TasksContext";


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 24,
  marginTop: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#5DE290" : "#53db87",
  },
}));

const ProgressBar = () => {
  const { tasks } = useTasksContext();
  const [divide, setDivide] = useState(0);

  useEffect(() => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length;
    const percentage =
      totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
    setDivide(percentage);
  }, [tasks]);
  return <BorderLinearProgress variant="determinate" value={divide} />;
};

export default ProgressBar;
