import { FC, useEffect, useState } from 'react';
import * as S from './index.style';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../../assets/lotties/confetti.json';
import { ProgressBarProps } from './index.types';


export const ProgressBar: FC<ProgressBarProps> = ({ max, value }) => {
  const [lottieRef, setLottieRef] = useState<any>();

  useEffect(() => {
    if (max !== 0 && value === max) {
      lottieRef?.play()
    }

  }, [max, value])

  return <S.ProgressContainer>
    <S.ProgressBar
      max={max}
      value={value}
    />
    <S.AnimationContainer>
      <Player
        lottieRef={instance => setLottieRef(instance)}
        loop
        src={animationData}
        onEvent={(event) => {
          if (event === 'loop') {
            lottieRef.pause()
          }
        }}
      />
    </S.AnimationContainer>
  </S.ProgressContainer>;
};
