import { useContext } from "react";
import { AddTask } from "../../components/AddTask";
import { EditTask } from "../../components/EditTask";
import { Header } from "../../components/Header";
import { SearchTask } from "../../components/SearchTask";
import { Tabs } from "../../components/Tabs";
import { Task } from "../../components/Task";
import { ContenxtApplication } from "../../Context/ContextApplication";
import { TasksDone } from "./components/TasksDone";
import { TasksPending } from "./components/TasksPending";
import { TasksSearch } from "./components/TasksSearch";
import { GridContainer, TaskContainer, TasksContainer } from "./styles";


export function Tasks(){
  const { tasks, componentEditTask, taskActive } = useContext(ContenxtApplication);
  return(
    <TaskContainer>
      <Header />
      <GridContainer>
        <Tabs />
        <SearchTask />
      </GridContainer>
      <AddTask />
      {componentEditTask === true ? <EditTask /> : <></>}
      <TasksContainer>
        {taskActive === 'done' ?  <TasksDone />  : taskActive === 'pending' ?  <TasksPending />  : taskActive !== '' ?  <TasksSearch />  : 
        ( tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))
        )}
        </TasksContainer>
    </TaskContainer>
  )
}