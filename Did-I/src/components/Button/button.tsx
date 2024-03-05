import * as S from "./button.style";
import { ButtonProps } from "./button.types";

export const Button = ({ ...props }: ButtonProps) => <S.Button {...props} />;
