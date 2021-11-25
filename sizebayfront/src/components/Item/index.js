import React from "react";

import ButtonArea from "./ButtonArea";

import { Container, ContentArea } from "./styles";

export default function Item(props) {
  return (
    <Container>
      <ContentArea>
        <input type="text" value={props.data.id} readOnly />
      </ContentArea>

      <ButtonArea />
    </Container>
  );
}
