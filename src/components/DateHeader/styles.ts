import styled from "styled-components";

export const DateDayText = styled.span`
  font: ${({ theme }) => theme.fonts.robotoM60.font};
  color: ${({ theme }) => theme.fonts.robotoM60.color};
`;

export const DateMonthWeekDayText = styled.span`
  font: ${({ theme }) => theme.fonts.roboto24.font};
  color: ${({ theme }) => theme.fonts.roboto24.color};
`;

export const DateYearText = styled.span`
  font: ${({ theme }) => theme.fonts.robotoL24.font};
  color: ${({ theme }) => theme.fonts.robotoL24.color};
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DateDayContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const DateMonthYearContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const DateHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

export const DateHeaderColumn = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const DateHeaderColumnLeft = styled(DateHeaderColumn)`
  justify-content: flex-start;
`;

export const DateHeaderColumnRight = styled(DateHeaderColumn)`
  justify-content: flex-end;
`;
