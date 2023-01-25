import { useContext, useEffect, useState } from "react";
import { ContenxtApplication } from "../../../../Context/ContextApplication";
import { ProgressContainer, ProgressIndicator } from "./styles";


export function ProgressBar(){
  const{ tasks } = useContext(ContenxtApplication);
  const tasksTotal = tasks.length;
  const tasksfineshed = tasks.filter((task) => task.isCompleted === true).length;
  const total = (tasksfineshed / tasksTotal) * 100;
  console.log(tasksfineshed, tasksTotal, );

    useEffect(() => {
      const timer = setTimeout(() => tasksTotal, 500);
      return () => clearTimeout(timer);
    }, []);
    
    return (
      <ProgressContainer  value={tasksTotal}>
        <ProgressIndicator className="ProgressIndicator" style={{ transform:  tasksTotal  === 0 ? `translateX(-100%)` : `translateX(-${(tasksfineshed / tasksTotal) * 100}%)` }} />
      </ProgressContainer>
    )
}