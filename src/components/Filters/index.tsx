import React from "react";
import { ButtonsContainer, FiltersContainer } from "./style";
import Input from "../Input";
import Button from "../Button";
import { InputProps, InputTypes } from "../../types/input";
import { ButtonProps } from "../../types/button";

interface FiltersProps {
  input: InputProps;
  buttons: ButtonProps[];
}

export default function Filters(props: FiltersProps) {
  return (
    <FiltersContainer>
      <ButtonsContainer>
      {props.buttons.map((button, index) => (
        <Button
          key={index}
          theme={button.theme}
          onButtonClick={button.onButtonClick}
        >
          {button.children}
        </Button>
      ))}
      </ButtonsContainer>

      <Input
        kind={InputTypes.SEARCH}
        value={props.input.value}
        onChange={props.input.onChange}
        isDisabled={props.input.isDisabled}
        onClearClick={props.input.onClearClick}
      />
    </FiltersContainer>
  );
}
