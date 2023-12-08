import React from 'react';
import styled from 'styled-components';
import ConfettiExplosion from 'react-confetti-explosion';

const Progress = styled.div`
  width: 100%;
  height: 24px;
  margin-bottom: 27px;
  background: #E4E4E4;
  border-radius: 4px;
`

const BackgroundComplete = styled.div`
  width: ${(props) => props.progress};
  height: 24px;
  border-radius: 4px;
  background: #5DE290;
`

const ProgressBar = (props) => {
  const {calculateProgress} = props;
  const progress = calculateProgress() + '%'
  const renderCompleteProgress = () => {
    if (progress === '100%') {
      return <ConfettiExplosion width={1000}/>
    }
  }
  return (
    <Progress>
      <BackgroundComplete progress={progress}>
        <div>
          {renderCompleteProgress()}
        </div>
      </BackgroundComplete>
    </Progress>
  );
}

export default ProgressBar;
