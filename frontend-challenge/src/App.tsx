import { useState } from "react";
import DayInfo from "./components/DayInfo";
import FilterList from "./components/FilterList";
import NewTodo from "./components/NewTodo";
import StatusBar from "./components/StatusBar";
import TodoList from "./components/ToDoList";

import { Container, Modal, Panel } from "./styles";
import { FilterStatus } from "./types/FilterStatus";
import { TodoType } from "./types/TodoType";

function App() {
  const [todosList, setTodos] = useState<TodoType[]>([]);
  const [filter, setFilter] = useState<FilterStatus>(FilterStatus.UNFILTERED);
  const [search, setSearch] = useState<string>("");
  const [inputValue, setInputValue] = useState("");

  const onNewTodo = (newValue: string) => {
    var newList: TodoType[] = [
      ...todosList,
      {
        id: new Date().getTime(),
        value: newValue,
        done: false,
      },
    ];
    setTodos(newList);
  };

  const onToggle = (todo: TodoType) => {
    setTodos(
      todosList.map((obj) =>
        obj.id === todo.id ? { ...obj, done: !todo.done } : obj
      )
    );
  };

  const onRemove = (todo: TodoType) => {
    setTodos(todosList.filter((obj) => obj.id !== todo.id));
  };

  const onFilter = (newFilter: FilterStatus) => {
    if (filter === newFilter) {
      setFilter(FilterStatus.UNFILTERED);
    } else {
      setFilter(newFilter);
    }
  };

  const onNewInput = (newInput: string) => {
    setInputValue(newInput);
  };

  const onSearch = (newSearch: string) => {
    if (newSearch === "") {
      setInputValue("");
    }
    setSearch(newSearch);
  };

  return (
    <Container>
      <Modal>
        <Panel>
          <DayInfo />
          <StatusBar todos={todosList} />
          <FilterList
            filter={filter}
            inputValue={inputValue}
            onFilter={onFilter}
            onSearch={onSearch}
            onNewInput={onNewInput}
          />
          <NewTodo filter={filter} search={search} onNewTodo={onNewTodo} />
          <TodoList
            todos={todosList}
            filter={filter}
            search={search}
            onToggle={onToggle}
            onRemove={onRemove}
            onFilter={onFilter}
            onSearch={onSearch}
          />
        </Panel>
      </Modal>
    </Container>
  );
}

export default App;
