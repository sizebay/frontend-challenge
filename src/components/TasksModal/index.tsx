import { useState } from 'react'
import { useItemService } from '../../services/itemService'
import { CreateItem } from '../CreateItem'
import { Header } from '../Header'
import { Container } from './styles'

export function TasksModal() {
  const {
    items,
    pendingItems,
    totalItemsCount,
    completedItemsCount,
    addItem,
    editItem,
    deleteItem,
    checkItem,
    selectedButton,
    setSelectedButton,
  } = useItemService()

  const [searchKey, setSearchKey] = useState('')

  const handleSearch = (searchKey: string) => {
    setSearchKey(searchKey)
  }

  const completedItems = items.filter((item: { completed: true }) => item.completed);

  return (
    <Container>
      <Header 
        onSearch={handleSearch} 
        completedItemsCount={completedItemsCount} 
        tasksCount={totalItemsCount}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <CreateItem 
        items={items}
        completedItems={completedItems}
        pendingItems={pendingItems}
        selectedButton={selectedButton}
        searchKey={searchKey}
        onDeleteItem={(id) => deleteItem(id)}
        onCheckItem={(id) => checkItem(id)}
      />
    </Container>
  )
}