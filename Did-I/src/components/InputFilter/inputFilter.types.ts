import { ComponentProps, ReactElement } from "react";

export type InputFilterStyles = {
  width?: string;
  height?: string;
};

export type InputFilterProps = ComponentProps<"input"> &
  InputFilterStyles & {
    elementInsideInput?: ReactElement;
  };
