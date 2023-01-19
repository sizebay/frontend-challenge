import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "phosphor-react";
import { AddTaskContainer } from "./styles";
import { useContext } from 'react';
import { ContenxtApplication } from '../../Context/ContextApplication';

const AddTaskFormSchema = z.object({
  text: z.string().min(1, 'Informe a Tarefa'),
})

type AddTaskInput = z.infer<typeof AddTaskFormSchema>

export function AddTask(){
  const { register, handleSubmit, reset } = useForm<AddTaskInput>({
    resolver: zodResolver(AddTaskFormSchema),
  });
  const { addTask } = useContext(ContenxtApplication);

  async function handleAddTask(data: AddTaskInput){
    await addTask(data.text);
    reset()
  }
  return (
    <AddTaskContainer>
      <input type="text" placeholder="Add new item..." id='taskAdd' {...register("text")} min={1} />
      <button type="submit" onClick={handleSubmit(handleAddTask)}><Plus size={25} /></button>
    </AddTaskContainer>
  )
}