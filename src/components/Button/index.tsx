import React from "react";
import { ButtonThemed } from "./style";
import { ThemeProvider } from "styled-components";
import { ButtonProps } from "../../types/button";

export default function Button(props: ButtonProps) {
  return (
    <ThemeProvider theme={props.theme}>
      <ButtonThemed onClick={props.onButtonClick}>{props.children}</ButtonThemed>
    </ThemeProvider>
  );
}