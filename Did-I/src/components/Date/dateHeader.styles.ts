import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const MonthDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MonthDayWrapper = styled.div``;

export const MonthDay = styled.div`
  font-family: ${({ theme }) => theme.font.Medium};
  font-size: ${({ theme }) => theme.fontSizes.Medium60};
  color: ${({ theme }) => theme.colors.grayMiddle};
`;
export const MonthName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.Regular24};
  color: ${({ theme }) => theme.colors.grayMiddle};
`;
export const Year = styled.div`
  font-family: ${({ theme }) => theme.font.Light};
  font-size: ${({ theme }) => theme.fontSizes.Regular24};
  color: ${({ theme }) => theme.colors.grayMiddle};
`;
export const WeekDay = styled.div`
  color: ${({ theme }) => theme.colors.grayMiddle};
  font-size: ${({ theme }) => theme.fontSizes.Regular24};
`;
