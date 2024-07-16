import * as S from "./inputFilter.styles";
import { InputFilterProps } from "./inputFilter.types";

export const InputFilter = ({
  width,
  height,
  elementInsideInput,
  onClick,
  ...props
}: InputFilterProps) => (
  <S.InputBox width={width} height={height}>
    <S.Input {...props} />
    <S.Span onClick={onClick}>{elementInsideInput}</S.Span>
  </S.InputBox>
);
