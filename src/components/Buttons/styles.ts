import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

export const Container = styled.div<{ active: boolean }>`
  border-radius: 17px;
  border: 1px solid;
  border-color: ${({ active, theme }) =>
    active ? theme.colors.blue : theme.colors.darkgray};
  padding: 1rem;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${({ active, theme }) =>
    active ? theme.colors.blue : theme.colors.darkergray};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const FaCheckStyled = styled(FaCheck)``;
