import * as S from './styles'

const Index = ({
  filter,
  list,
  search,
  searchRef,
  setSearch,
  setFilter,
  setDisabled,
  setHidden,
  setTodos,
  value,
  maxValue
}) => {
  const searchEmpty = search && !!(list.length === 0)
  const doneEmpty =
    !!(filter === 'Done') && !!(list.length === 0) && !!(search === '')

  const todoCompleted = value === maxValue

  function doneEmptyClick() {
    setFilter('Pending')
    setHidden(false)
    setDisabled(false)
  }

  function searchEmptyClick() {
    setSearch('')
    searchRef.current.reset()
    if (filter != 'Done') setHidden(false)
  }

  function todoCompletedClick() {
    setTodos([])
    setFilter('Pending')
    setHidden(false)
  }

  return (
    <>
      {todoCompleted && (
        <S.Message>
          You finished your to do list.{' '}
          <S.Info onClick={todoCompletedClick}>Click here </S.Info> to restart.
        </S.Message>
      )}
      {searchEmpty && (
        <S.Message>
          Your search found no results.{' '}
          <S.Info onClick={searchEmptyClick}>Clean the search</S.Info> here to
          see all items.
        </S.Message>
      )}
      {doneEmpty && (
        <S.Message>
          There are no items marked as done.{' '}
          <S.Info onClick={doneEmptyClick}>Clear the filter here</S.Info> to see
          all items.
        </S.Message>
      )}
    </>
  )
}

export default Index
