import { useRef } from 'react'

import * as S from './styles'

import { filterArray } from 'utils/filter'

import ItemForm from 'components/ItemForm'

const Index = ({ todos, setTodos, filter, search, setDisabled }) => {
  const list = filterArray(todos, filter, search)
  const inputRef = useRef()
  return (
    <S.List>
      {/* Gambiarra para melhorar a experiência quando remove ou quando muda o estado de uma tarefa */}
      <input
        type="text"
        style={{ cursor: 'context-menu', position: 'absolute', zIndex: -1 }}
        ref={inputRef}
      />
      {list &&
        list.map((todo, idArray) => (
          <ItemForm
            key={idArray}
            todo={todo}
            inputRef={inputRef}
            setTodos={setTodos}
            valid={filter === 'Pending' ? true : false}
            setDisabled={setDisabled}
          />
        ))}
    </S.List>
  )
}

export default Index
