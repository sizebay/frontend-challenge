import styled from "styled-components";

export const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const WeekDay = styled.p`
  font-size: 24px;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0px 5px;

  .day {
    font-size: 60px;
    letter-spacing: -3px;
  }

  .monthYear {
    display: flex;
    flex-direction: column;
  }

  .monthYear > .month {
    font-weight: 400;
  }

  .monthYear > .year {
    font-weight: 300;
  }
`;
