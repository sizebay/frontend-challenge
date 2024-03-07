import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 70px;
  display: flex;
  overflow: hidden;
  position: relative;

    @media screen and (max-width: 768px) {
      margin-top: 3rem
    }
`;

export const YearMonthContainer = styled.div`
  display: flex;
  position: relative;
  width: min-content;
  flex-direction: column;
  top: 0px;
  left: 5em;
`;

export const DayNumber = styled.div`
  position: absolute;
  font-size: 65px;
  text-align: left;
  font-family: var(--fonte-principal) !important;
  font-weight: 500;
  letter-spacing: 0px;
  color: var(--grey-dark);
  opacity: 1;
  width: min-content;
`;

export const Month = styled.div`
  text-align: left;
  width: min-content;
  height: min-content;
  font-family: var(--fonte-principal);
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0px;
  color: var(--grey-dark);
  opacity: 1;
  position: absolute;
  top:10px;
`;

export const Year = styled.div`
  top: 40px;
  left: 0px;
  text-align: left;
  font-family: var(--fonte-principal)!important;
  font-weight: 100;
  font-size: 20px;
  letter-spacing: 0px;
  color: var(--grey-dark);
  opacity: 1;
  position: absolute;
  width: min-content;
  height: min-content;
`;

export const CurrentDay = styled.div`
  width: min-content;
  height: min-content;
  font-family: var(--fonte-principal) !important;
  color: var(--grey-dark);
  opacity: 1;
  font-size: 24px;
  position: absolute;
  right: 0px;
  bottom: 2px;
`;
