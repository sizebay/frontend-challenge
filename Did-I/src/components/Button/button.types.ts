import { ComponentProps } from "react";

export type ButtonStyles = {
  clicked?: boolean;
};

export type ButtonProps = ComponentProps<"button"> & ButtonStyles;
