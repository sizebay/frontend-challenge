import { FilterOptions } from "./models/filter";
import { Progress } from "./models/item";
import { List } from "./models/list";

export class ToDoService {
  private list: List = {
    items: [],
  };

  public getItems(filterOptions?: FilterOptions): List['items'] {
    if (!filterOptions) return this.list.items;

    let currList = this.list.items;
    const { byStatus, byDescription } = filterOptions;

    if (byStatus && byStatus !== 'ALL') {
      currList = currList.filter(item => item.status === byStatus);
    }

    if (byDescription) {
      currList = currList.filter(item => item.description.includes(byDescription));
    }

    return currList;
  }

  public addItem(description: string): ToDoService {
    this.list.items.push({
      id: Date.now().toString(),
      description,
      status: 'PENDING',
    });

    return this;
  }

  public removeItem(id: string): ToDoService {
    this.list.items = this.list.items.filter(item => item.id !== id);
    return this;
  }

  public finishItem(id: string): ToDoService {
    this.list.items = this.list.items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          status: 'DONE',
        }
      }

      return item;
    });

    return this;
  }

  public updateDescription(id: string, newDescription: string): ToDoService {
    this.list.items = this.list.items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          description: newDescription,
        }
      }

      return item;
    });

    return this;
  }

  public getProgress(): Progress {
    const total = this.list.items.length;
    const done = this.list.items.filter(item => item.status === 'DONE').length;

    return {
      done,
      total,
    };
  }
}