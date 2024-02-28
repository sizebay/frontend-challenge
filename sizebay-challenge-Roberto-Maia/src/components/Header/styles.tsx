import styled from "styled-components";

export const DivHeader = styled.div`
  width: 680px;
  height: 79px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 100%;
    height: 79px;
  }
`;

export const DayOfWeek = styled.div`
  width: 124px;
  height: 32px;
  text-align: center;
  font: normal normal normal 24px/32px Roboto;
  letter-spacing: 0px;
  color: #848484;
  opacity: 1;
`;

export const DivDate = styled.div`
  width: 121px;
  height: 79px;
  opacity: 1;
  display: flex;
  gap: 5px;
`;

export const PDay = styled.div`
  width: 208px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 79px;
  font-size: 70px;
  font-family: Roboto;
  letter-spacing: 0px;
  color: #848484;
  opacity: 1;
`;

export const MonthAndYear = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 0px;
  color: #848484;
  opacity: 1;
`;

export const PMonth = styled.div`
  width: 32px;
  height: fit-content;
  padding: 0;
  font-size: 20px;
  letter-spacing: 0px;
  color: #848484;
  opacity: 1;
`;

export const PYear = styled.div`
  width: 53px;
  height: fit-content;
  font-size: 25px;
  letter-spacing: 0px;
  padding: 0;
  color: #848484;
  opacity: 1;
`;
