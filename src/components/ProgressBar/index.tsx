import { useEffect, useState } from "react";
import { useReward } from "react-rewards";

import { Wrapper } from "./styles";

export interface iProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: iProgressBarProps) => {
  const [activateReward, setActivateReward] = useState(false);

  const { reward, isAnimating } = useReward("rewarder", "confetti");

  useEffect(() => {
    progress === 100 ? setActivateReward(true) : setActivateReward(false);
    if (activateReward && !isAnimating) {
      reward();
    }
  }, [progress, activateReward]);

  return (
    <>
      <Wrapper progress={progress}>
        <div></div>
        <span id="rewarder" />
      </Wrapper>
    </>
  );
};

export default ProgressBar;
