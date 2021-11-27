/* eslint-disable no-mixed-operators */
import React from "react";

import ButtonArea from "./ButtonArea";

import { Container, ContentArea } from "./styles";

export default function Item(props) {
  return (
    <Container>
      <ContentArea isPending={props.data.isPending}>
        {props.data.isPending && (
          <input type="text" value={props.data.content} readOnly />
          ) || (
          <span>
            {props.data.content}
          </span>
        )}
      </ContentArea>

      <ButtonArea item={props.data} />
    </Container>
  );
}
