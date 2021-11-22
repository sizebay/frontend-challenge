import React from "react";

import { Container, Options } from "./styles";

export default function Item(props) {
  const { content } = props;

  return (
    <Container>
      {content}
      <Options>
        <button id="removeButton">-</button>
        <button id="doneButton">Done</button>
      </Options>
    </Container>
  );
}
