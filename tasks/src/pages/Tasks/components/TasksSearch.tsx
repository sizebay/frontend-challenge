import { useContext } from "react";
import { Task } from "../../../components/Task";
import { ContenxtApplication } from "../../../Context/ContextApplication";


export function TasksSearch(){
  const { tasks, taskActive } = useContext(ContenxtApplication);
  const searchTask = tasks.filter(task => task.content === taskActive).length;
  return(
    <>
    {taskActive !== '' && searchTask > 0 ? (
      tasks.filter(task =>
        task.content === taskActive
      ).map((task) => (
          <Task key={task.id} task={task} />
      ))) : (
        <p>Your search found no results. Clean the search here to see all items.</p>
    )}
    </>
  )
}