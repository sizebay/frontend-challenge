import { IoMdRemoveCircle, IoMdCheckmarkCircle, IoMdAddCircle } from 'react-icons/io';
import styled from 'styled-components'

interface ButtonDefaultProps {
  isChecked: boolean;
  isSubmit: boolean;
  isButtonActive: boolean;
}

export const ButtonDefault = styled.button<ButtonDefaultProps>`
  width: 2.75rem;
  min-width: 44px;
  height: 3rem;
  min-height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background-color: ${({ isChecked, isSubmit, theme }) =>
    isChecked
      ? theme.green
    : isSubmit ? 
      theme.blue 
    : theme.red };

  color: ${(props) => props.theme.white};
  transition: background-color 0.3s;

  opacity: ${({ isSubmit, isButtonActive }) => isSubmit && !isButtonActive ? '0.5' : '1'};

  border: none;
  border-radius: ${({ isChecked, isSubmit, theme }) =>
    isChecked || isSubmit
      ? "0px 4px 4px 0px"
      : "0px"};
`

export const IconDelete = styled(IoMdRemoveCircle)`
  width: 1.25rem;
  height: 1.25rem;
`

export const IconCheck = styled(IoMdCheckmarkCircle)`
  width: 1.25rem;
  height: 1.25rem;
`

export const IconAdd = styled(IoMdAddCircle)`
  width: 1.25rem;
  height: 1.25rem;
  color: ${(props) => props.theme.white}
`