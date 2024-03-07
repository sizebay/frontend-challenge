import { ComponentProps, ReactElement } from "react";

export type ButtonStyles = {
  $clicked?: boolean;
  $filterButton?: boolean;
  $addButton?: boolean;
  $excludeButton?: boolean;
  $doneButton?: boolean;
};

export type ButtonProps = ComponentProps<"button"> &
  ButtonStyles & {
    icon?: ReactElement;
  };
