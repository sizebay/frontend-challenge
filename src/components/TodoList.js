import React, { useState, useEffect } from "react";

export default function TodoList(props) {
  const [filtered, setFiltered] = useState();

  useEffect(() => {
    props.handleSearchTodo(props.search);
  }, [props.todos]);

  function handleListRender() {
    return props.filteredTodos.map((el, index) => {
      return (
        <div
          key={index}
          onClick={() => {
            props.handleRemoveTodo(el);
          }}
        >
          {el.name}
        </div>
      );
    });
  }
  return <div>{handleListRender()}</div>;
}
