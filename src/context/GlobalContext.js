import { createContext, useState, useEffect, useRef } from 'react'
import { getMaxValue, getValue } from 'utils/progressbar'

export const GlobalContext = createContext()

export function GlobalStorage({ children }) {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('')
  const [search, setSearch] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [hidden, setHidden] = useState(false)
  const [value, setValue] = useState(0)
  const [maxValue, setMaxValue] = useState(999)

  const searchRef = useRef()

  useEffect(() => {
    const json = localStorage.getItem('list-todos')
    const loadedTodos = JSON.parse(json)
    if (loadedTodos) {
      setTodos(loadedTodos)
    }
  }, [])

  useEffect(() => {
    const json = JSON.stringify(todos)
    localStorage.setItem('list-todos', json)

    setValue(getValue(todos))
    setMaxValue(getMaxValue(todos))
  }, [todos])

  return (
    <GlobalContext.Provider
      value={{
        todos,
        setTodos,
        filter,
        setFilter,
        search,
        setSearch,
        disabled,
        setDisabled,
        hidden,
        setHidden,
        value,
        maxValue,
        searchRef
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
