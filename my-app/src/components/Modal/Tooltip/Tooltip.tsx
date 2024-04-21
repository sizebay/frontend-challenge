import * as S from './Tooltip.styles'
import { TooltipProps } from "./Tooltip.interfaces";

export function Tooltip({ title, ...props }: TooltipProps) {
  return (
    <S.Tooltip {...props} role="tooltip">
      {title}
    </S.Tooltip>
  )
}