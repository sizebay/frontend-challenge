import styled from 'styled-components'

interface ProgressStatusFillProps {
  width: number;
  completed: boolean;
}

export const ProgressBarContainer = styled.div`
  width: 42.5rem;
  height: 1.5rem;
  margin-top: 1rem;
  
  border-radius: 4px;

  background-color: ${(props) => props.theme['gray-400']};
`

export const ProgressStatus = styled.div<ProgressStatusFillProps>`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: ${(props) => props.theme.green};
  border-radius: 4px;
  transition: width 0.5s ease;
`