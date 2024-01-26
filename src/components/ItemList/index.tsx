import React, { useState } from 'react';
import { DeleteButton, IconCheck, IconRemove, List, StyledItem } from './style';

interface ItemListProps {
  items: string[];
  onDeleteItem: (index: number) => void;
}

function ItemList({ items, onDeleteItem }: ItemListProps) {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleItemClick = (index: number) => {
    setActiveItem(index === activeItem ? null : index);
  };

  const handleCheckClick = (index: number) => {
    const updatedCheckedItems = checkedItems.includes(index)
      ? checkedItems.filter((item) => item !== index)
      : [...checkedItems, index];

    setCheckedItems(updatedCheckedItems);
    onDeleteItem(index);
  };

  return (
    <List>
      {items.map((item, index) => (
        <StyledItem
          key={index}
          isActive={index === activeItem}
          onClick={() => handleItemClick(index)}
        >
          {item}
          {index === activeItem && (
            <>
              <DeleteButton onClick={() => handleCheckClick(index)} checked>
                <IconCheck />
              </DeleteButton>
              <DeleteButton onClick={() => onDeleteItem(index)}>
                <IconRemove />
              </DeleteButton>
            </>
          )}
        </StyledItem>
      ))}
    </List>
  );
}
export default ItemList;