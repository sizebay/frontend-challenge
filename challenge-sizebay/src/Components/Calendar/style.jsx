import styled from "styled-components";
import { palette } from "../../colors/colors";

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${palette.grey};
  padding: 14px 0;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Weekday = styled.p`
  font-size: 24px;
`;
export const Day = styled.span`
  font-size: 60px;
`;

export const MonthYear = styled.p`
  font-size: 24px;
  font-weight: lighter;
`;