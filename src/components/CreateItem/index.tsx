import { useState } from 'react'
import { useItemService, Item } from '../../services/itemService'
import { AddItemBar } from '../AddItemBar'
import { TaskItem } from '../TaskItem'

import { CreateItemContainer, ItemsListWrapper } from './styles'

interface ItemsProps {
  items: Item[];
  completedItems: Item[];
  pendingItems: Item[];
  selectedButton: string | null;
  searchKey: string;
  onDeleteItem: (id: number) => void;
  onCheckItem: (id: number) => void;
}

export function CreateItem({
  items,
  completedItems,
  pendingItems,
  selectedButton,
  searchKey,
  onDeleteItem,
  onCheckItem,
}: ItemsProps) {
  const { addItem, editItem } = useItemService()

  const [actualItem, setActualItem] = useState<number | null>(null)
  const [actualId, setActualId] = useState(0)
  const [inputValue, setInputValue] = useState("Add new item...")

  const handleItemClick = (index: number, content: string, id: number) => {
    setActualId(id)
    setActualItem(index === actualItem ? null : index)
    setInputValue(index === actualItem ? "Add new item..." : content)
  }

  const filteredItems = searchKey !== "" ? items.filter((item) => item.content.toLowerCase().includes(searchKey.toLowerCase())) : items

  const showItems = selectedButton === "done" ? filteredItems.filter((item) => item.completed) :  filteredItems.filter((item) => !item.completed)

  const itemsCounter = items.length
  
  return (
    <CreateItemContainer>
      <AddItemBar onAddItem={(content) => addItem(content)} onEditItem={(content) => editItem(content, actualId)} actualItem={actualItem} inputValue={inputValue} resetInputValue={() => setInputValue("Add new item...")}/>
      <ItemsListWrapper>
        {itemsCounter > 0 ? (
          <>
            {showItems.map((item, index) => (
              <TaskItem
                key={index}
                isActive={index === actualItem}
                isChecked={completedItems.includes(item)} 
                title={item.content}
                onClick={() => handleItemClick(index, item.content, item.id)}
                onCheckItem={() => onCheckItem(item.id)}
                onDeleteItem={() => onDeleteItem(item.id)}
              />
            ))}
          </>
        ) : (<></>)}
      </ItemsListWrapper>
 
    </CreateItemContainer>
  )
}