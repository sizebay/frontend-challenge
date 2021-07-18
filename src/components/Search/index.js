import { changeSearch, submitSearch } from 'utils/search'

import * as S from './styles'

const Index = ({ filter, search, searchRef, setSearch, setHidden }) => {
  function handleSubmit(event) {
    event.preventDefault()
    submitSearch(search, filter, setSearch, setHidden)
  }

  function handleChange({ target }) {
    changeSearch(target.value, filter, setSearch, setHidden)
  }

  function handleReset() {
    setSearch('')
    searchRef.current.reset()
  }

  return (
    <S.Form onSubmit={handleSubmit} ref={searchRef}>
      <label htmlFor="text"></label>
      <S.Input
        type="text"
        placeholder="Search items"
        text={search}
        onChange={handleChange}
      />
      {search.length >= 1 ? (
        <S.Button
          type="reset"
          defaultValue="Reset"
          icon="x"
          onClick={handleReset}
        />
      ) : (
        <S.Button type="submit" icon="search" />
      )}
    </S.Form>
  )
}

export default Index
