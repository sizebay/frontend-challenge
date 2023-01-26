import confetti from './confetti.svg'
import React from 'react'
import { SConfetti } from './style'

export const Confetti = ({visible}) => {
  return visible && <SConfetti alt='confetti' src={confetti}/>
}
