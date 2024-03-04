import { ReactNode } from "react";
import { InputSizes } from "../../../models/styling";

export type ButtonVariants = 'primary' | 'info' | 'success' | 'danger';

export interface ButtonProps extends Omit<ButtonStyles, 'variant'> {
  children: ReactNode;
  onClick?: () => void;
  variant?: ButtonStyles['variant'];
}

export interface ButtonStyles {
  size?: InputSizes;
  toggled?: boolean;
  isIcon?: boolean;
  variant: ButtonVariants;
  disabled?: boolean;
}