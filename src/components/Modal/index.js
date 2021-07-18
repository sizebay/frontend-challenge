import * as S from './styles'

import Date from 'components/Date'
import Week from 'components/Week'
import ProgressBar from 'components/ProgressBar'
import Filter from 'components/Filter'
import Search from 'components/Search'
import Form from 'components/Form'
import Message from 'components/Message'
import List from 'components/List'
import { filterArray } from 'utils/filter'

const Index = ({
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
  searchRef,
  done,
  pending
}) => (
  <S.Wrapper>
    <S.Header>
      <Date />
      <Week />
    </S.Header>
    <ProgressBar value={value} maxValue={maxValue} />
    <S.ControllerWrapper>
      <S.FilterWrapper>
        <Filter
          label={done}
          filter={filter}
          setFilter={setFilter}
          setDisabled={setDisabled}
          setHidden={setHidden}
        />
        <Filter
          label={pending}
          filter={filter}
          setFilter={setFilter}
          setDisabled={setDisabled}
          setHidden={setHidden}
        />
      </S.FilterWrapper>
      <S.SearchWrapper>
        <Search
          filter={filter}
          search={search}
          searchRef={searchRef}
          setSearch={setSearch}
          setHidden={setHidden}
        />
      </S.SearchWrapper>
    </S.ControllerWrapper>
    <Form disabled={disabled} hidden={hidden} setTodos={setTodos} />
    <Message
      filter={filter}
      list={filterArray(todos, filter, search)}
      search={search}
      searchRef={searchRef}
      setSearch={setSearch}
      setFilter={setFilter}
      setDisabled={setDisabled}
      setHidden={setHidden}
      setTodos={setTodos}
      value={value}
      maxValue={maxValue}
    />
    <List
      todos={todos}
      setTodos={setTodos}
      filter={filter}
      search={search}
      searchRef={searchRef}
      setSearch={setSearch}
      setFilter={setFilter}
      setDisabled={setDisabled}
      setHidden={setHidden}
      value={value}
      maxValue={maxValue}
    />
  </S.Wrapper>
)

export default Index
