import React from "react";
import "./index.css";
import { TodoType } from "../../types/TodoType";
import { FilterStatus } from "../../types/FilterStatus";
import { ClearButton } from "./styles";
import { MdCheckCircle, MdRemoveCircle } from "react-icons/md";

type TodoProps = {
  todos: Array<TodoType>;
  filter: FilterStatus;
  search: string;
  onRemove: (todo: TodoType) => void;
  onToggle: (todo: TodoType) => void;
  onFilter: (newFilter: FilterStatus) => void;
  onSearch: (newSearch: string) => void;
};

const TodoList = (props: TodoProps) => {
  const { todos, filter, search, onRemove, onToggle, onFilter, onSearch } =
    props;

  const filteredTodos = todos.filter((todo) => {
    if (filter === FilterStatus.DONE) {
      return todo.done === true ? todo : false;
    }
    if (filter === FilterStatus.PENDING) {
      return todo.done === false ? todo : false;
    }
    // if (filter === FilterStatus.UNFILTERED) {
    return todo;
    // }
  });

  const searchedTodos = filteredTodos.filter((todo) => {
    return todo.value.toLowerCase().includes(search.toLowerCase());
  });

  const erase = () => {
    onSearch("");
    onFilter(FilterStatus.UNFILTERED);
  };

  return (
    <>
      <ul>
        {searchedTodos.length === 0 && todos.length > 0 ? (
          <li>
            Your search found no results.{" "}
            <ClearButton onClick={erase}>Clean the search here</ClearButton> to
            see all items.
          </li>
        ) : (
          searchedTodos.map((todo: TodoType) => {
            return (
              <li key={todo.id}>
                <span className={todo.done ? "done" : ""}>{todo.value}</span>
                <button type="button" onClick={() => onRemove(todo)}>
                  <MdRemoveCircle />
                </button>
                <button type="button" onClick={() => onToggle(todo)}>
                  <MdCheckCircle />
                </button>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

export default TodoList;
