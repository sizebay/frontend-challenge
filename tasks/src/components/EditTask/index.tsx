import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil, Plus } from "phosphor-react";
import { EditTaskContainer } from "./styles";
import { useContext } from 'react';
import { ContenxtApplication } from '../../Context/ContextApplication';

const EditTaskFormSchema = z.object({
  text: z.string().min(1, 'Informe a Tarefa'),
})

type EditTaskInput = z.infer<typeof EditTaskFormSchema>

export function EditTask(){
  const { register, handleSubmit, reset } = useForm<EditTaskInput>({
    resolver: zodResolver(EditTaskFormSchema),
  });
  const { setTextEditTask } = useContext(ContenxtApplication);

   function handleEditTask(data: EditTaskInput){
    setTextEditTask(data.text);
    reset()
  }
  return (
    <EditTaskContainer>
      <input type="text" placeholder="Edit Task"  {...register("text")} min={1} />
      <button type="submit" onClick={handleSubmit(handleEditTask)}><Pencil size={25} /></button>
    </EditTaskContainer>
  )
}