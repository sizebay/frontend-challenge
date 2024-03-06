import * as S from "./button.style";
import { ButtonProps } from "./button.types";

export const Button = ({ children, icon, ...props }: ButtonProps) => (
  <S.Button {...props}>
    {icon && icon} {children}
  </S.Button>
);
