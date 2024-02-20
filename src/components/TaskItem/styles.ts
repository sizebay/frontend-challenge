import styled, { css } from 'styled-components'
import { IoMdRemoveCircle, IoMdCheckmarkCircle } from 'react-icons/io'

interface TaskItemProps {
  isActive: boolean;
  isChecked: boolean;
}

interface DeleteButtonProps {
  isChecked: boolean;
}

export const TaskItemContainer = styled.div<TaskItemProps>`
  width: 680px;
  height: 48px;
  min-height: 48px;
  display: flex;
  align-items: center;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['gray-500']};

  background: ${(props) => props.theme['gray-100']};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.white};
  }

  ${(props) =>
    props.isActive
      ? css`
          background: ${props.theme.white};
          cursor: pointer;
        `
      : css`
          background: ${props.theme['gray-100']};
          cursor: pointer;
        `};
`

export const TaskItemTitle = styled.p`
  margin-left: 0.6rem;
`

export const ItemButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`

export const ItemButton = styled.button<DeleteButtonProps>`
  width: 2.5rem;
  height: 3rem;
  cursor: pointer;

  background-color: ${({ isChecked, theme }) =>
    isChecked
      ? theme.green
      : theme.red};

  color: ${(props) => props.theme.white};
  transition: background-color 0.3s;

  border: none;
  border-radius: ${({ isChecked, theme }) =>
    isChecked
      ? "0px 4px 4px 0px"
      : "0px"};;
`

export const IconDelete = styled(IoMdRemoveCircle)`
  font-size: 1.5rem;
`

export const IconCheck = styled(IoMdCheckmarkCircle)`
  font-size: 1.5rem;
`