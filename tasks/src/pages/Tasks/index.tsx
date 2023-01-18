import { AddTask } from "../../components/AddTask";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { TaskContainer } from "./styles";


export function Tasks(){
  return(
    <TaskContainer>
      <Header />
      <AddTask />
      <Task />
    </TaskContainer>
  )
}