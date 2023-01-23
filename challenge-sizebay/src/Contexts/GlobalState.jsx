import React, {useState} from 'react'
import {GlobalContext} from './GlobalContext'

const GlobalState = (props) => {
const [pending, setPending] = useState(['Tarefa pendente'])
const [done, setDone] = useState([])
const [listToShow, setListToShow] = useState('') 
const [search, setSearch] = useState('')
const [taskProgress, setTaskProgress] = useState([])
const [percentagesArray, setPercentagesArray] = useState([])

    
const states = {pending, done, listToShow, search,taskProgress, percentagesArray }
const setters = {setPending, setDone, setListToShow, setSearch, setTaskProgress, setPercentagesArray}
const data = {states, setters}

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState;