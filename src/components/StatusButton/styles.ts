import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'

interface SituationButtonProps {
  selected: boolean;
}

interface StatusIconProps {
  selected: boolean;
}

export const SituationButton = styled.button<SituationButtonProps>`
  font-size: 0.87rem;
  align-items: center;
  width: 4rem;
  height: 2rem;
  margin-right: 0.5rem;

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

