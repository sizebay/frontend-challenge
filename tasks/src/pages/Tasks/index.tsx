import { useContext } from "react";
import { AddTask } from "../../components/AddTask";
import { EditTask } from "../../components/EditTask";
import { Header } from "../../components/Header";
import { SearchTask } from "../../components/SearchTask";
import { Tabs } from "../../components/Tabs";
import { Task } from "../../components/Task";
import { ContenxtApplication } from "../../Context/ContextApplication";
import { GridContainer, TaskContainer, TasksContainer } from "./styles";


export function Tasks(){
  const { tasks, functionAddTask } = useContext(ContenxtApplication)
  return(
    <TaskContainer>
      <Header />
      <GridContainer>
        <Tabs />
        <SearchTask />
      </GridContainer>
      {functionAddTask === true ? <AddTask /> : <EditTask />}
      <TasksContainer>
        {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
      </TasksContainer>
    </TaskContainer>
  )
}