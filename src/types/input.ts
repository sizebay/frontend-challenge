import { ChangeEvent } from "react";

export enum InputTypes {
  SEARCH,
  TASK
}

export interface InputProps {
  kind: InputTypes,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onInputClick?: () => void,
  isDisabled?: boolean 
}

export interface InputValues {
  [key: string]: string;
}