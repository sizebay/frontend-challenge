import { LottieAnimation } from "../LottieAnimation/lottieAnimation";
import * as S from "./progressiveBar.styles";
import { ProgressiveBarProps } from "./progressiveBar.types";
import Congratulations from "../../assets/lottie/congratulations.json";

export const ProgressiveBar = ({ value }: ProgressiveBarProps) => {
  return (
    <S.ExternalProgressiveBar>
      <S.InternalProgressiveBar width={value} />
      <S.Animation>
        {value === 100 && <LottieAnimation animation={Congratulations} />}
      </S.Animation>
    </S.ExternalProgressiveBar>
  );
};
