import * as S from './Modal.styles';
import { ModalHeader } from './Header';
import { ModalFilterBar } from './FilterBar';

export function Modal() {
  return (
    <S.Container>
      <ModalHeader />
      <ModalFilterBar />
    </S.Container>
  )
}