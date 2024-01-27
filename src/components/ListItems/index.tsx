import React, { useState } from 'react';
import { DeleteButton, IconCheck, IconRemove, List, StyledItem } from './style';

interface ListItemsProps {
  items: string[];
  completedItems: string[];
  onDeleteItem: (index: number) => void;
  onCheckClick: (index: number) => void;
}

function ListItems({ items, completedItems, onDeleteItem, onCheckClick }: ListItemsProps) {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveItem(index === activeItem ? null : index);
  };

  const displayItems = items.filter(item => !completedItems.includes(item));

  return (
    <List>
      {displayItems.map((item, index) => (
        <StyledItem
          key={index}
          isActive={index === activeItem}
          onClick={() => handleItemClick(index)}
        >
          {item}
          {index === activeItem && (
            <>
              <DeleteButton onClick={() => onCheckClick(index)} checked>
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

export default ListItems;