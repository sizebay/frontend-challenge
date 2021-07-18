import PageTemplate from 'templates/Pages'
import Modal from 'components/Modal'

import { useContext } from 'react'
import { GlobalContext } from 'context/GlobalContext'

export default function Home() {
  const {
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
  } = useContext(GlobalContext)

  return (
    <PageTemplate>
      <Modal
        todos={todos}
        setTodos={setTodos}
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
        disabled={disabled}
        setDisabled={setDisabled}
        hidden={hidden}
        setHidden={setHidden}
        value={value}
        maxValue={maxValue}
        searchRef={searchRef}
        done="Done"
        pending="Pending"
      />
    </PageTemplate>
  )
}
