import Lottie from 'lottie-react';
import { LottieAnimationProps } from './LottiAnimation.interfaces';

export function LottieAnimation({ animation }: LottieAnimationProps) {
  return(
    <Lottie loop={false} animationData={animation} />
  )
}