import { Minus, Check } from "phosphor-react";
import { ButtonContainer, ButtonDelete, ButtonFinished, TaskContainer } from "./styles";


export function Task(){
  return(
    <TaskContainer>
      <strong>teste task</strong>
      <ButtonContainer>
        <ButtonDelete><Minus size={25} /></ButtonDelete>
        <ButtonFinished><Check size={25} /></ButtonFinished>
      </ButtonContainer>
    </TaskContainer>
  )
}