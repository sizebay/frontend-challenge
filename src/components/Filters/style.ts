import { MdCheck } from "react-icons/md";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  gap: 8px;

  @media screen and (max-width: 800px) {
    justify-content: flex-end;
  }
`;

export const FilterItem = styled.span<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  padding: 8px 16px;
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.blue : theme.colors.border};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.blue : theme.colors.primary};
  background-color: ${({ theme, selected }) =>
    selected
      ? theme.colors.background.filter
      : theme.colors.background.primary};

  border-radius: 17px;
  font-size: 14px;

  cursor: pointer;
`;

export const IconCheck = styled(MdCheck)`
  font-size: 16px;
`;
