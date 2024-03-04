import { Item } from "../../../service/to-do.service/models/item";

export interface ToDoListItemProps {
  finishItem: (id: string) => void;
  item: Item;
  removeItem: (id: string) => void;
  updateDescription: (id: string, description: string) => void;
}