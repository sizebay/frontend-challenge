import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { ButtonAddTodo, NewTodoContainer, NewTodoInput } from "./styles";
import './index.css';
import { FilterStatus } from "../../types/FilterStatus";

type NewTodoProps = {
  filter: FilterStatus;
  search: string;
  onNewTodo: (newValue: string) => void;
};

const NewTodo = (props: NewTodoProps) => {
  const { filter, search, onNewTodo } = props;
  const [value, setValue] = useState("");
  const [active, setActive] = useState(false);
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

  const removeOpacity = () => {
    setActive(true);
  }

  const addOpacity = () => {
    setActive(false);
  }

  return (
    <>
      {filter !== FilterStatus.UNFILTERED || search !== "" ? <></> : (
        <NewTodoContainer>
        <NewTodoInput
          className={active ? "focused" : ""}
          placeholder="Add new item..."
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={removeOpacity}
          onBlur={addOpacity}
        />
        <ButtonAddTodo className={active ? "focused" : ""} onClick={submit}>
          <MdAddCircle />
        </ButtonAddTodo>
      </NewTodoContainer>
      )}
    </>
  );
};

export default NewTodo;
