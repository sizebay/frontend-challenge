import * as S from './Button.styles';
import { ButtonProps } from './Button.interfaces';

export function ModalButton({ children, icon, ...props }: ButtonProps){
  return (
    <S.Button {...props}>
      {icon && icon} {children}
    </S.Button>
  )
}