import { useContext } from "react";
import { Task } from "../../../components/Task";
import { ContenxtApplication } from "../../../Context/ContextApplication";


export function TasksDone(){
  const { tasks, taskActive } = useContext(ContenxtApplication);
  const tasksCompleted = tasks.filter(task => task.isCompleted == true).length
  return(
    <>
    {taskActive === 'done' && tasksCompleted > 0 ? (
      tasks.filter(task =>  task.isCompleted === true  ).map((task) => (
        <Task key={task.id} task={task} /> ))) : (
              <p>There are no items marked as done. Clear the filter here to see all items.</p>
        )}
    </>
  )
}