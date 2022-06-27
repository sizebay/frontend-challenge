import styled from 'styled-components';
import { theme } from '../../globalStyles/theme';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateContainer = styled.div`
  display: grid;
  grid-template-areas:
    "dateNumber dateMonth"
    "dateNumber dateYear";
`
export const DateNumber = styled.span`
  margin: 0;
  padding: 0;
  height: fit-content;
  grid-area: dateNumber;
  font-size: ${theme.font.size[60]}
`

export const DateMonth = styled.span`
  margin: 0;
  padding: 0;
  height: fit-content;
  grid-area: dateMonth;
  align-self: flex-end;
  font-size: ${theme.font.size[24]};
  font-weight: ${theme.font.weight.regular};
  text-transform: capitalize;
`

export const DateYear = styled.span`
  margin: 0;
  padding: 0;
  height: fit-content;
  grid-area: dateYear;
  font-size: ${theme.font.size[24]};
  font-weight: ${theme.font.weight.light};
`

export const WeekDay = styled.span`
  margin: 0;
  padding: 0;
  height: fit-content;
  grid-area: dateYear;
  font-size: ${theme.font.size[24]};
  font-weight: ${theme.font.weight.regular};
  text-transform: capitalize;
`