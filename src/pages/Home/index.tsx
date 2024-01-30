import React from "react";
import { CenteredSquare, Main } from "./style";
import DateTimeDisplay from "../../components/DateTimeDisplay";
import ProgressBar from "../../components/ProgressBar";
import NewItemBar from "../../components/NewItemBar";
import ListItems from "../../components/ListItems";
import { useTaskService } from "../../services/taskService";
import SearchFilterPanel from "../../components/SearchFilterPanel";


function Home() {
  const {
    items,
    completedItems,
    pendingItems,
    totalTasks,
    completedTasks,
    addItem,
    deleteItem,
    checkItem,
    selectedButton,
    setSelectedButton,
  } = useTaskService({
    items: [],
    completedItems: [],
  });

  return (
    <CenteredSquare>
      <Main>
        <DateTimeDisplay />
        <ProgressBar completedItems={completedTasks} totalTasks={totalTasks} />
        <SearchFilterPanel
          addItem={addItem}
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          pendingItems={pendingItems}
        />
        <NewItemBar onAddItemClick={addItem} />
        <ListItems
          items={items}
          completedItems={completedItems}
          pendingItems={pendingItems}
          onDeleteItem={deleteItem}
          onCheckClick={checkItem}
          selectedButton={selectedButton}
        />
      </Main>
    </CenteredSquare>
  );
}

export default Home;