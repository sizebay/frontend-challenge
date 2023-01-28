import React, { useState} from 'react'
import svg from './more.svg'
import { useRootContext } from '../../Hooks/useRootContext.js';
import { addTask } from '../../controllers/task';
import { SNewTasks } from './style';

export const NewTasks = () => {
  const [inputValue, setInputValue] = useState('')
  const {setTasks} = useRootContext()
  function handleSubmit(e){
    e.preventDefault()
    addTask(setTasks, inputValue);
    setInputValue('')
  }

  return (
    <SNewTasks onSubmit={handleSubmit}>
      {/* <input onFocus={() => setBtnAdd(true)} onBlur={() => setBtnAdd(false)} placeholder='Add new item...'></input> */}
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Add new item...' required />
      <button className={inputValue.length ? 'BtnAddPressioned' : ''}><img src={svg} alt='add new task'></img></button>
    </SNewTasks>
  )
}

// llllll
