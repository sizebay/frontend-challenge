import classes from "./item-list.module.css";
import Item from "./Item";
import { ChoreInterface } from "@/utils/interfaces";

interface ItemListProps {
  choresList: ChoreInterface[];
}

function ItemList({ choresList }: Readonly<ItemListProps>) {
  return (
    <div>
      <div className={classes.container}>
        <ul className={classes.list}>
          {choresList.map((event) => (
            <Item key={event.id} id={event.id} isDone={event.isDone} title={event.chore} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemList;
