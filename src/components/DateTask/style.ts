import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerDate = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  div {
    display: block;
  }
`;

export const Day = styled.h2`
  font-size: 60px;
  font-weight: 500;
`;

export const Month = styled.h5`
  font-weight: 400;
  font-size: 24px;
`;

export const Year = styled(Month)`
  font-weight: 300;
`;

export const DayOfWeek = styled.h5`
  font-weight: 400;
  font-size: 24px;
`;
