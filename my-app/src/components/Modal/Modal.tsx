import * as S from './Modal.styles';
import { ModalHeader } from './Header';
import { ModalFilterBar } from './FilterBar';
import { ModalProgressBar } from './ProgressBar';

export function Modal() {
  return (
    <S.Container>
      <ModalHeader />
      <ModalFilterBar />
      <ModalProgressBar />
    </S.Container>
  )
}