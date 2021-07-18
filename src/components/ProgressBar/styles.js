import styled, { css } from 'styled-components'

export const Progress = styled.div`
  width: 100%;
  height: 2.4rem;
  background: #e4e4e4 0% 0% no-repeat padding-box;
  border-radius: 4px;
  overflow: hidden;
  @media (max-width: 800px) {
    height: 3rem;
  }
`

export const Bar = styled.div`
  ${({ value, maxValue }) => css`
    height: 2.4rem;
    background: #5de290 0% 0% no-repeat padding-box;
    border-radius: 4px 0px 0px 4px;
    /* width: 20%; */
    transition: width 1s ease-in-out;

    width: ${(value * 100) / maxValue}%;

    @media (max-width: 800px) {
      height: 3rem;
    }
  `}
`
