import { ComponentProps, ReactElement } from "react";

export type InputStyles = {
  width: string;
  height: string;
  icon?: ReactElement;
};

export type InputProps = ComponentProps<"input"> & InputStyles;
