import { FilterOptions, ItemStatusFilter } from "../../../service/to-do.service/models/filter";
import { Item, Progress } from "../../../service/to-do.service/models/item";

export interface ToDoProps {
  addItem: (description: string) => void;
  date: string;
  filterOptions: FilterOptions;
  finishItem: (id: string) => void;
  items: Item[];
  progress: Progress;
  removeItem: (id: string) => void;
  updateDescription: (id: string, description: string) => void;
  updateFilterStatus: (status: ItemStatusFilter) => void;
  updateFilterDescription: (description: string) => void;
}