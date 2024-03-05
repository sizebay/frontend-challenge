import * as S from "./input.styles";
import { InputProps } from "./input.types";

export const Input = ({ width, height, icon, ...props }: InputProps) => (
  <S.InputBox width={width} height={height}>
    <S.Input {...props} />
  </S.InputBox>
);
