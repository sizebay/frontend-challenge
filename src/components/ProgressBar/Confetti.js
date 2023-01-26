import confetti from './confetti.svg'
import React from 'react'
import styled from 'styled-components'


const SConfetti = styled.img`
  position: absolute;
  pointer-events: none;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`
export const Confetti = ({visible}) => {
  return visible && <SConfetti alt='confetti' src={confetti}/>
}
