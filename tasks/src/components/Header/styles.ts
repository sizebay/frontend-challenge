import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-top: 54px;
`;

export const DateContainer = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;

  > strong {
    font-size: 60px;
    font-weight: 500;
  }

  > div {
    > strong {
      font-size: 20px;
      font-weight: 400;
    }

    > p {
      font-size: 20px;
      font-weight: 300;
      margin: 0;
    }
  }
`;

export const DayOfWeek = styled.h4`
  font-size: 24px;
  font-weight: 400;
`;
