import * as S from "./inputFilter.styles";
import { InputFilterProps } from "./inputFilter.types";

export const InputFilter = ({
  width,
  height,
  elementInsideInput,
  ...props
}: InputFilterProps) => (
  <S.InputBox width={width} height={height}>
    <S.Input {...props} />
    <S.Span>{elementInsideInput}</S.Span>
  </S.InputBox>
);
