import * as S from "./date.styles";
export const Date = () => {
  return (
    <S.Header>
      <S.MonthDate>
        <S.MonthDay>07</S.MonthDay>
        <S.MonthDayWrapper>
          <S.MonthName>Jul</S.MonthName>
          <S.Year>2022</S.Year>
        </S.MonthDayWrapper>
      </S.MonthDate>
      <S.WeekDay>Segunda</S.WeekDay>
    </S.Header>
  );
};
