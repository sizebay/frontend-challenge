import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'

interface SituationButtonProps {
  selected: boolean;
  done: boolean;
}

interface StatusIconProps {
  selected: boolean;
}

export const SituationButton = styled.button<SituationButtonProps>`
  font-size: 0.87rem;
  display: flex;
  align-items: center;
  width: ${({ selected, done }) => done && selected ? "5.25rem" : done ? "4rem" : selected ? "6.43rem" : "5.18rem"}; 
  height: 2rem;
  margin-right: 0.5rem;
  padding: 1rem;

  background: ${(props) => props.theme.white};
  color: ${(props) => props.selected ? props.theme.blue : props.theme['gray-600']};
  border: 1px solid ${(props) =>  props.selected ? props.theme.blue : props.theme['gray-500']};
  border-radius: 17px;

  transition: all 0.3s;

  &:hover, &:focus {
    border: 1px solid ${(props) => props.theme.blue};
    color: ${(props) => props.theme.blue};
  }
`

export const StatusIcon = styled(FaCheck)<StatusIconProps>`
  opacity: ${({ selected }) => (selected ? "1" : "0")};
  margin-right: ${({ selected }) => (selected ? "0.5rem" : "0")};
  display: ${({ selected }) => (selected ? "block" : "none")};
  transition: opacity 0.3s;
`

