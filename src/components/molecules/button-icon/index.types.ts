import { ButtonProps, IconsAvailable } from "../../atoms";

export interface ButtonIconProps extends Omit<ButtonProps, 'children'> {
  icon: IconsAvailable;
}