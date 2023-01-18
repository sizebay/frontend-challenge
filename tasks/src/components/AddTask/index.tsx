import { Plus } from "phosphor-react";
import { AddTaskContainer } from "./styles";


export function AddTask(){
  return (
    <AddTaskContainer>
      <input type="text" placeholder="Add new item..." />
      <button type="button"><Plus size={25} /></button>
    </AddTaskContainer>
  )
}