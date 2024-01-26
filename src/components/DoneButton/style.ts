import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';

interface DoneButtonContainerProps {
  isSelected: boolean;
}

interface IconContainerProps {
  isSelected: boolean;
}

export const IconContainer = styled.span<IconContainerProps>`
  margin-right: ${({ isSelected }) => (isSelected ? '8px' : '0')};
  opacity: ${({ isSelected }) => (isSelected ? '1' : '0')};
  transition: opacity 0.3s;
`;

export const DoneButtonContainer = styled.button<DoneButtonContainerProps>`
  display: flex;
  align-items: center;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  color: ${({ isSelected }) => (isSelected ? '#4DA6B3' : '#848484')};
  border: 1px solid ${({ isSelected }) => (isSelected ? '#4DA6B3' : '#DBDBDB')};
  border-radius: 17px;
  cursor: pointer;
  padding: 8px 16px;
  margin-right: 10px;
  transition: all 0.3s;

  &:hover,
  &:focus {
    border: 1px solid #4DA6B3;
    color: #4DA6B3;
  }
`;

export const IconCheck = styled(FaCheck)<IconContainerProps>`
  color: #4DA6B3;
  font-size: 12px;
  // Controla pelo isSelected
  display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
`;
