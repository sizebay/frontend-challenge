import { useState } from 'react'
import { useItemService, Item } from '../../services/itemService'
import { TaskItem } from '../TaskItem'

import { AddItemBarContainer, CreateItemContainer, ItemForm, ItemInput, ItemsListWrapper } from './styles'
import { DefaultButton } from '../DefaultButton'
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormProps {
  newItem: string;
}

interface ItemsProps {
  items: Item[];
  completedItems: Item[];
  pendingItems: Item[];
  selectedButton: string | null;
  searchKey: string;
  addItem: (content: string) => void;
  editItem: (content: string, id: number) => void;
  onDeleteItem: (id: number) => void;
  onCheckItem: (id: number) => void;
}

export function CreateItem({
  items,
  completedItems,
  selectedButton,
  searchKey,
  addItem,
  editItem,
  onDeleteItem,
  onCheckItem,
}: ItemsProps) {

  const { register, handleSubmit, setValue } = useForm<FormProps>();
  const [isActive, setIsActive] = useState(false);

  const [actualItem, setActualItem] = useState<number | null>(null)
  const [actualId, setActualId] = useState(0)
  const [inputValue, setInputValue] = useState("Add new item...")

  const handleItemClick = (index: number, content: string, id: number) => {
    setActualId(index === actualItem ? 0 : id)
    setActualItem(index === actualItem ? null : index)
    setInputValue(index === actualItem ? "Add new item..." : content)
    setIsActive(true)
  }

  const handleAddItem: SubmitHandler<FormProps> = (data) => {
    if (data.newItem.trim() !== "" && actualId === 0) {
      addItem(data.newItem)
    } else if (data.newItem.trim() !== "") {
      editItem(data.newItem, actualId)
    }
    setValue("newItem", "");
    setInputValue("Add new item...")
  }

  const handleFocus = () => {
    setIsActive(true)
  }

  const handleBlur = () => {
    setIsActive(false)
    setValue("newItem", ""); 
    setInputValue("Add new item...")
  }

  const filteredItems = searchKey !== "" ? items.filter((item) => item.content.toLowerCase().includes(searchKey.toLowerCase())) : items

  const showItems = selectedButton === "done" ? filteredItems.filter((item) => item.completed) :  filteredItems.filter((item) => !item.completed)

  const itemsCounter = items.length
  
  return (
    <CreateItemContainer>
      <AddItemBarContainer>
        <ItemForm onSubmit={handleSubmit(handleAddItem)}>
          <ItemInput type="text"
            placeholder={inputValue || "Add new item..."}
            {...register("newItem")} 
            maxLength={60}
            isActive={isActive}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <DefaultButton  isChecked={false} isButtonActive={isActive} isSubmit/>
        </ItemForm>
      </AddItemBarContainer>
      
      <ItemsListWrapper>
        {itemsCounter > 0 ? (
          <>
            {showItems.map((item, index) => (
              <TaskItem
                key={index}
                isContainerActive={index === actualItem}
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