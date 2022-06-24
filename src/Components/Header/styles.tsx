import styled from 'styled-components';
import { theme } from '../../GlobaStyles/theme';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
`;

export const DateHolder = styled.div`
  display: grid;
  justify-content: center;
  grid-template-areas:
    "DateNumber DateMonth"
    "DateNumber DateYear";
`;

export const DateNumber = styled.p`
  grid-area: DateNumber;
  font-size: ${theme.font.size[60]};
  font-weight: ${theme.font.weight.medium};
`;

export const DateMonth = styled.span`
  grid-area: DateMonth;
  align-self: end;
  font-size: ${theme.font.size[24]};
  font-weight: ${theme.font.weight.regular};
  width: 3ch;
  white-space: nowrap;
  overflow: hidden;
`;

export const DateYear = styled.span`
  grid-area: DateYear;
  font-size: ${theme.font.size[24]};
  font-weight: ${theme.font.weight.light};
`;

export const WeekDay = styled.p`
  font-size: ${theme.font.size[24]};
  font-weight: ${theme.font.weight.regular};
`;
