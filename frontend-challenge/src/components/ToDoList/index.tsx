import React from "react";
import "./index.css";
import { TodoType } from "../../types/TodoType";
import { FilterStatus } from "../../types/FilterStatus";

type TodoProps = {
  todos: Array<TodoType>;
  filter: FilterStatus;
  onRemove: (todo: TodoType) => void;
  onToggle: (todo: TodoType) => void;
};

const TodoList = (props: TodoProps) => {
  const { todos, filter, onRemove, onToggle } = props;
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

  return (
    <>
      <ul>
        {filteredTodos.map((todo: TodoType) => {
          return (
            <li key={todo.id}>
              <span className={todo.done ? "done" : ""}>{todo.value}</span>
              <button type="button" onClick={() => onRemove && onRemove(todo)}>
                {" "}
                -{" "}
              </button>
              <button type="button" onClick={() => onToggle && onToggle(todo)}>
                {" "}
                V{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
