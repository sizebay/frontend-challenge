import { months, daysOfWeek } from "./dateHeader.constant";
import * as S from "./dateHeader.styles";
export const DateHeader = () => {
  const catchDate = () => {
    const date = new Date();
    return {
      day: `${date.getDate()}`.padStart(2, "0"),
      year: date.getFullYear(),
      month: months[date.getMonth()],
      weekDay: daysOfWeek[date.getDay()],
    };
  };

  return (
    <S.Header>
      <S.MonthDate>
        <S.MonthDay>{catchDate().day}</S.MonthDay>
        <S.MonthDayWrapper>
          <S.MonthName>{catchDate().month}</S.MonthName>
          <S.Year>{catchDate().year}</S.Year>
        </S.MonthDayWrapper>
      </S.MonthDate>
      <S.WeekDay>{catchDate().weekDay}</S.WeekDay>
    </S.Header>
  );
};
