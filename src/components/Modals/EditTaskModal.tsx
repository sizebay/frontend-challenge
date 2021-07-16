import React from "react";
import { EditItemInput } from "../Inputs";
import { Container, Backdrop, Close, FaTimesStyled } from "./styles";

interface Props {
  close: () => void;
  action: (newTitle: string) => void;
  text: string;
}

export function EditTaskModal(props: Props) {
  const { close, text, action } = props;

  return (
    <>
      <Backdrop />
      <Container>
        <Close onClick={close}>
          <FaTimesStyled />
        </Close>
        <h1>EDIT TASK</h1>
        <EditItemInput text={text} action={action} />
      </Container>
    </>
  );
}
