import { Minus, Check, Pencil } from "phosphor-react";
import { useContext } from "react";
import { ContenxtApplication, ITask } from "../../Context/ContextApplication";
import { ButtonContainer, ButtonDelete, ButtonEdit, ButtonFinished, TaskContainer } from "./styles";

interface Task {
  task: ITask;
}

export function Task({ task }: Task){
  const { completeTask, deleteTask, setIdTask, setComponentEditTask } = useContext(ContenxtApplication);

  function handleEditTask(){
    setComponentEditTask(true);
    setIdTask(task.id);
  }

  return(
    <TaskContainer>
      <strong>{task.content}</strong>
      <ButtonContainer>
        <ButtonEdit onClick={() => handleEditTask()}><Pencil size={25} /></ButtonEdit>
        <ButtonDelete onClick={() => deleteTask(task.id)}><Minus size={25} /></ButtonDelete>
        {
          task.isCompleted ? (
            <ButtonFinished onClick={() => completeTask(task.id)}>
              <Minus size={25} />
            </ButtonFinished>
          ) : (
            <ButtonFinished onClick={() => completeTask(task.id)}>
              <Check size={25} />
            </ButtonFinished>
          )
        }
      </ButtonContainer>
    </TaskContainer>
  )
}