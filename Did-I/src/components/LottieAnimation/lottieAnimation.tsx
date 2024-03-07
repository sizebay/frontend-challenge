import Lottie from "lottie-react";

import { LottieAnimationProps } from "./lottieAnimation.type";

export const LottieAnimation = ({ animation }: LottieAnimationProps) => (
  <Lottie animationData={animation} loop={false} />
);
