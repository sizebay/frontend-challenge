import { ComponentProps } from "react";

export type InputEditStyles = {
  width?: string;
  height?: string;
  $hasDone?: boolean;
};

export type InputEditProps = ComponentProps<"input"> &
  InputEditStyles & {
    onClickCheck: () => void;
    onClickMinus: () => void;
  };
