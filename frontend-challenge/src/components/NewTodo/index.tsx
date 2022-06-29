import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";

type NewTodoProps = {
  onNewTodo: (newValue: string) => void;
};

const NewTodo = (props: NewTodoProps) => {
  const [value, setValue] = useState("");
  const { onNewTodo } = props;
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const erase = () => {
    setValue("");
  };

  const submit = () => {
    if (onNewTodo) {
      onNewTodo(value);
      erase();
    }
  };

  const onKeyDown = (event: { which: number }) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div>
        <input
          className="new-todo"
          placeholder="Add new item..."
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button onClick={submit}>
          <MdAddCircle />
        </button>
      </div>
    </>
  );
};

export default NewTodo;
