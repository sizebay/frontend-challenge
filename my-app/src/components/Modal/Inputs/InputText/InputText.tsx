import * as S from './InputText.styles'
import { InputProps } from './InputText.interfaces'

export function ModalInputText(props: InputProps) {
  return (
    <S.InputText type='text' {...props} />
  )
}