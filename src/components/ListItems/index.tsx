import React, { useState } from "react";
import { DeleteButton, IconCheck, IconRemove, List, StyledItem } from "./style";

interface ListItemsProps {
  items: string[];
  completedItems: string[];
  pendingItems: string[];
  onDeleteItem: (index: number) => void;
  onCheckClick: (index: number) => void;
  selectedButton: string | null;
}

function ListItems({
  completedItems,
  pendingItems,
  onDeleteItem,
  onCheckClick,
  selectedButton,
}: ListItemsProps) {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const displayItems =
    selectedButton === "done" ? completedItems : pendingItems;

  const handleItemClick = (index: number) => {
    setActiveItem(index === activeItem ? null : index);
  };

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
