import { ComponentProps } from "react";

export type InputAddStyles = {
  width?: string;
  height?: string;
};

export type InputAddProps = ComponentProps<"input"> &
  InputAddStyles & {
    onClick?: () => void;
    disabled?: boolean;
  };
