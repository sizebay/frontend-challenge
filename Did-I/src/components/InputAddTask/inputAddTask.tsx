import { InputAddProps } from "./inputAddTask.types";
import * as S from "./inputAddTask.styles";
import { Button } from "../Button/button.style";
import Plus from "../../assets/icons/plus.svg?react";

export const InputAddTask = ({
  width,
  height,
  onClick,
  disabled,
  ...props
}: InputAddProps) => (
  <S.InputBox width={width} height={height}>
    <S.Input {...props} />
    <Button $addButton onClick={onClick} disabled={disabled}>
      <S.Icon>
        <Plus />
      </S.Icon>
    </Button>
  </S.InputBox>
);
