import * as S from './Header.styles';
import { formattedDate } from 'utils/FormatDate';

export function ModalHeader() {
  return (
    <S.Header>
      <S.DateWrapper>
        <S.MonthDay>{formattedDate.day}</S.MonthDay>
        <S.MonthAndYear>
          <span>{formattedDate.month}</span>
          <span>{formattedDate.year}</span>
        </S.MonthAndYear>
      </S.DateWrapper>
      <S.WeekDay>{formattedDate.weekday}</S.WeekDay>
    </S.Header>
  )
}