import styled, { css } from 'styled-components'

interface TaskItemProps {
  isContainerActive: boolean;
  isChecked: boolean;
}

export const TaskItemContainer = styled.div<TaskItemProps>`
  width: 42.4rem;
  max-height: 48px;
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
    props.isContainerActive
      ? css`
          background: ${props.theme.white};
          border-right-color: ${props.theme.green};
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
