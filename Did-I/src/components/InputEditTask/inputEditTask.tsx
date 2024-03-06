import { InputEditProps } from "./inputEditTask.types";
import * as S from "./inputEditTask.styles";
import { Button } from "../Button/button.style";
import Check from "../../assets/check.svg?react";
import Minus from "../../assets/minus.svg?react";

export const InputEditTask = ({
  width,
  height,
  onClickCheck,
  onClickMinus,
  $hasDone,
  ...props
}: InputEditProps) => (
  <S.InputBox width={width} height={height} $hasDone={$hasDone}>
    <S.Input {...props} />
    <S.Span>
      <Button $excludeButton onClick={onClickMinus}>
        <S.Icon>
          <Minus />
        </S.Icon>
      </Button>
      <Button $doneButton onClick={onClickCheck}>
        <S.Icon>
          <Check />
        </S.Icon>
      </Button>
    </S.Span>
  </S.InputBox>
);
