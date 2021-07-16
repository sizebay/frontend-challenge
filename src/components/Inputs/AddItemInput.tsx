import React from "react";
import { TaskContext } from "../../contexts/TaskContext";
import {
  ItemInputContainer,
  ItemInputStyled,
  ItemInputButton,
  FaPlusStyled,
} from "./styles";

export function AddItemInput() {
  const { add } = React.useContext(TaskContext);

  const [title, setTitle] = React.useState("");

  return (
    <ItemInputContainer>
      <ItemInputStyled
        placeholder="Add new item"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <ItemInputButton
        onClick={() => {
          add(title);
          setTitle("");
        }}
      >
        <FaPlusStyled />
      </ItemInputButton>
    </ItemInputContainer>
  );
}
