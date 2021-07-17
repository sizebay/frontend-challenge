import * as S from './styles'

import { filterArray } from 'utils/filter'

import ItemForm from 'components/ItemForm'

const Index = ({ todos, setTodos, filter, search, setDisabled }) => {
  const list = filterArray(todos, filter, search)
  return (
    <S.List>
      {list &&
        list.map((todo, idArray) => (
          <ItemForm
            key={idArray}
            todo={todo}
            setTodos={setTodos}
            valid={filter === 'Pending' ? true : false}
            setDisabled={setDisabled}
          />
        ))}
    </S.List>
  )
}

export default Index
