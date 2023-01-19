import React, {useState} from 'react'
import {GlobalContext} from './GlobalContext'

const GlobalState = (props) => {
const [pending, setPending] = useState(['Tarefa pendente'])
const [done, setDone] = useState(['tarefa finalizada'])
const [listToShow, setListToShow] = useState('') 

    
const states = {pending, done, listToShow }
const setters = {setPending, setDone, setListToShow}
const data = {states, setters}

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState;