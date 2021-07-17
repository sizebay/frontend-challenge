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

  return (
    <S.Form onSubmit={handleSubmit} ref={searchRef}>
      <label htmlFor="text"></label>
      <S.Input
        type="text"
        placeholder="Search items"
        text={search}
        onChange={handleChange}
      />
      <S.Button type="submit" />
    </S.Form>
  )
}

export default Index
