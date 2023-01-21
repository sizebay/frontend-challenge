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
  const { tasks, functionAddTask, taskActive } = useContext(ContenxtApplication)
  return(
    <TaskContainer>
      <Header />
      <GridContainer>
        <Tabs />
        <SearchTask />
      </GridContainer>
      {functionAddTask === true ? <AddTask /> : <EditTask />}
      {taskActive === 'done' ? (
          tasks.filter((task) => {
            task.isCompleted === true
          }).map((task) => {
            <TasksContainer>
              <Task key={task.id} task={task} />
            </TasksContainer>
          })) : taskActive === 'pending' ? (
            tasks.filter((task) => {
              task.isCompleted === false
            }).map((task) => {
              <TasksContainer>
                <Task key={task.id} task={task} />
              </TasksContainer>
            })) : taskActive !== '' ? (
              tasks.filter((task) => {
                task.content === taskActive
              }).map((task) => {
                <TasksContainer>
                  <Task key={task.id} task={task} />
                </TasksContainer>
              })) : (
                tasks.map((task) => {
                  <TasksContainer>
                    <Task key={task.id} task={task} />
                  </TasksContainer>
                })
              )}
    </TaskContainer>
  )
}