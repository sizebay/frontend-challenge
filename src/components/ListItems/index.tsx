import React, { useState } from "react";
import {
  DeleteButton,
  IconCheck,
  IconRemove,
  List,
  StyledItem,
} from "./style";
import { Task } from "../../services/taskService";

interface ListItemsProps {
  items: Task[];
  completedItems: Task[];
  pendingItems: Task[];
  onDeleteItem: (id: number) => void;
  onCheckClick: (id: number) => void;
  selectedButton: string | null;
}

function ListItems({
  items,
  completedItems,
  pendingItems,
  onDeleteItem,
  onCheckClick,
  selectedButton,
}: ListItemsProps) {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const displayItems =
    selectedButton === "pending" ? pendingItems : selectedButton === "done" ? completedItems : items;

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
          checked={completedItems.includes(item)}
          selectedButton={selectedButton}
        >
          {item.content}
          {(index === activeItem || (selectedButton === null && completedItems.includes(item))) && 
           (
            <>
              {index === activeItem && !completedItems.includes(item) && (
                <>
                  <DeleteButton onClick={() => onCheckClick(item.id)} checked>
                    <IconCheck />
                  </DeleteButton>
                  <DeleteButton onClick={() => onDeleteItem(item.id)}>
                    <IconRemove />
                  </DeleteButton>
                </>
              )}
            </>
          )}
        </StyledItem>
      ))}
    </List>
  );
}

export default ListItems;
