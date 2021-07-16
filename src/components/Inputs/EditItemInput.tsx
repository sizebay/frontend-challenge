import React from "react";
import {
  ItemInputContainer,
  ItemInputStyled,
  ItemInputButton,
  FaCheckStyled,
} from "./styles";

interface Props {
  text: string;
  action: (newTitle: string) => void;
}

export function EditItemInput(props: Props) {
  const { text, action } = props;

  const [title, setTitle] = React.useState(text);

  return (
    <ItemInputContainer>
      <ItemInputStyled
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <ItemInputButton
        onClick={() => {
          if (title.trim()) action(title);
        }}
      >
        <FaCheckStyled />
      </ItemInputButton>
    </ItemInputContainer>
  );
}
