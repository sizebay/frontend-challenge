import { useContext } from "react";
import { Task } from "../../../components/Task";
import { ContenxtApplication } from "../../../Context/ContextApplication";


export function TasksPending(){
  const { tasks, taskActive } = useContext(ContenxtApplication);
  const tasksPending = tasks.filter(task => task.isCompleted == false).length
  return(
    <>
    {taskActive === 'pending'  && tasksPending > 0 ? (
      tasks.filter(task => 
        task.isCompleted === false
      ).map((task) => (
          <Task key={task.id} task={task} />
      ))) : (
        <p>There are no items marked as pending. Clear the filter here to see all items.</p>
      )}
      </>
  )
}