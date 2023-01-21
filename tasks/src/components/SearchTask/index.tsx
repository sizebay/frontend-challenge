import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";import { MagnifyingGlass, X } from "phosphor-react";
import { SearchContainer } from "./styles";
import { useContext, useState } from 'react';
import { ContenxtApplication } from '../../Context/ContextApplication';

const searchFormSchema = z.object({
  text: z.string().min(1),
})

type SearchTaskInput = z.infer<typeof searchFormSchema>

export function SearchTask(){
  const { register, handleSubmit } = useForm<SearchTaskInput>({
    resolver: zodResolver(searchFormSchema),
  });
  const { tasksActive } = useContext(ContenxtApplication);
  const [text, setText] = useState('');

  async function handleSearchTask(data: SearchTaskInput){
    await tasksActive(data.text);
  }
  return(
    <SearchContainer onSubmit={handleSubmit(handleSearchTask)}>
      <input type="text" value={text} placeholder="Search Items" {...register("text")} onChange={(e) => setText(e.target.value)} />
      { text !== '' ? <button onClick={() => setText('')}><X size={25} /></button> : <MagnifyingGlass size={25} />}
    </SearchContainer>
  )
}