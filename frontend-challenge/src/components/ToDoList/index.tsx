import React, { useState } from "react";
import "./index.css";
import { TodoType } from "../../types/TodoType";
import { FilterStatus } from "../../types/FilterStatus";
import {
  ButtonDoneTodo,
  ButtonRemoveTodo,
  ClearButton,
  TodoItem,
} from "./styles";
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
  const [onFocusUp, setOnFocusUp] = useState(false);

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

  const addColorful = () => {
    setOnFocusUp(true);
  };
  const rmColorful = () => {
    setOnFocusUp(false);
  };

  return (
    <>
      <ul className="todo-list">
        {searchedTodos.length === 0 && todos.length > 0 ? (
          <li>
            <span>
              Your search found no results.{" "}
              <ClearButton onClick={erase}>Clean the search here</ClearButton>{" "}
              to see all items.
            </span>
          </li>
        ) : (
          searchedTodos.map((todo: TodoType) => {
            return (
              <li
                key={todo.id}
                onMouseEnter={addColorful}
                onMouseLeave={rmColorful}
              >
                <TodoItem className={todo.done ? "done" : ""}>
                  {todo.value}
                </TodoItem>
                <ButtonRemoveTodo
                  type="button"
                  className={onFocusUp ? "" : "colorful"}
                  onClick={() => onRemove(todo)}
                >
                  <MdRemoveCircle />
                </ButtonRemoveTodo>
                <ButtonDoneTodo
                  type="button"
                  className={onFocusUp ? "" : "colorful"}
                  onClick={() => onToggle(todo)}
                >
                  <MdCheckCircle />
                </ButtonDoneTodo>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

export default TodoList;
