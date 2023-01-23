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
  const { tasks, componentEditTask, taskActive } = useContext(ContenxtApplication);
  const tasksCompleted = tasks.filter(task => task.isCompleted == true).length
  const tasksPending = tasks.filter(task => task.isCompleted == false).length
  const searchTask = tasks.filter(task => task.content === taskActive).length
  console.log(tasksCompleted, tasksPending, searchTask);
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
        {taskActive === 'done' && tasksCompleted > 0 ? (
            tasks.filter(task => 
              task.isCompleted === true 
              ).map((task) => (
                <Task key={task.id} task={task} />
            ))) : taskActive === 'done' && tasksCompleted == 0 ? (
              <p>There are no items marked as done. Clear the filter here to see all items.</p>
            ) : taskActive === 'pending' && tasksPending > 0 ? (
              tasks.filter(task => 
                task.isCompleted === false
              ).map((task) => (
                  <Task key={task.id} task={task} />
              ))) : taskActive === 'pending' && tasksPending == 0  ? (
                <p>There are no items marked as pending. Clear the filter here to see all items.</p>
              ) : taskActive !== '' && searchTask > 0 ? (
                tasks.filter(task =>
                  task.content === taskActive
                ).map((task) => (
                    <Task key={task.id} task={task} />
                ))) : taskActive !== '' && searchTask == 0 ? (
                    <p>Your search found no results. Clean the search here to see all items.</p>
                ) : (
                  tasks.map((task) => (
                      <Task key={task.id} task={task} />
                  ))
                )}
        </TasksContainer>
    </TaskContainer>
  )
}