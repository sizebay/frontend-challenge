import React from "react";

import { Container, FaCheckStyled } from "./styles";

interface Props {
  title: string;
  selected: boolean;
  action: () => void;
}

export function FilterButton(props: Props) {
  const { title, selected, action } = props;

  return (
    <Container active={selected} onClick={action}>
      {selected && <FaCheckStyled />}
      {title}
    </Container>
  );
}
