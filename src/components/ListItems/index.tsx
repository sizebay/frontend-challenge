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
  searchTerm: string;
}

function ListItems({
  items,
  completedItems,
  pendingItems,
  onDeleteItem,
  onCheckClick,
  selectedButton,
  searchTerm,
}: ListItemsProps) {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveItem(index === activeItem ? null : index);
  };

  const filterAndMapItems = (items: Task[]) => {
    return items
      .filter((item) =>
        searchTerm === "" ||
        item.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((item, index) => (
        <StyledItem
          key={index}
          isActive={index === activeItem}
          onClick={() => handleItemClick(index)}
          checked={completedItems.includes(item)}
          selectedButton={selectedButton}
        >
          {item.content}
          {index === activeItem &&
            !completedItems.includes(item) &&
            selectedButton === null && (
              <>
                <DeleteButton onClick={() => onCheckClick(item.id)} checked>
                  <IconCheck />
                </DeleteButton>
                <DeleteButton onClick={() => onDeleteItem(item.id)}>
                  <IconRemove />
                </DeleteButton>
              </>
            )}
        </StyledItem>
      ));
  };

  const displayItems =
    selectedButton === "pending"
      ? filterAndMapItems(pendingItems)
      : selectedButton === "done"
      ? filterAndMapItems(completedItems)
      : filterAndMapItems(items);

  return <List>{displayItems}</List>;
}

export default ListItems;
