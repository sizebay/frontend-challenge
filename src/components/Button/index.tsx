import React from "react";
import { ButtonThemed } from "./style";
import { ThemeProvider } from "styled-components";
import { ButtonProps } from "../../types/button";
import { FaCheck } from "react-icons/fa6";

export default function Button(props: ButtonProps) {
  return (
    <ThemeProvider theme={props.theme}>
      <ButtonThemed onClick={props.onButtonClick}>
        {props.icon && <FaCheck />}
        {props.children && props.children}
      </ButtonThemed>
    </ThemeProvider>
  );
}