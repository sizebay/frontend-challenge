import { useState } from "react";
import * as S from "./tooltip.styles";
import { TooltipProps } from "./tooltip.types";

export const Tooltip = ({ children, delay, toolTipContent }: TooltipProps) => {
  let timeout: any;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <S.TooltipBox
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <S.Tooltip>
          <S.Text>{toolTipContent}</S.Text>
        </S.Tooltip>
      )}
    </S.TooltipBox>
  );
};
