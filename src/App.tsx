import { useEffect, useState } from "react";
import AddTaskInput from "./components/AddTaskInput";
import ProgressBar from "./components/ProgressBar";
import { useTasks } from "./providers/Tasks";

function App() {
  const { tasks, completeTask, percentageCompletedTasks } = useTasks();
  console.log(percentageCompletedTasks);
  return (
    <>
      <ProgressBar progress={percentageCompletedTasks} />
      <AddTaskInput />
      {tasks.length ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <h3>{task.description}</h3>
              <button onClick={() => completeTask(task)}>completa kk</button>
            </li>
          ))}
        </ul>
      ) : (
        "voce nao tem task alguma"
      )}
    </>
  );
}

export default App;
