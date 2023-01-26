import React from 'react'
import styled from 'styled-components';
import { useRootContext } from '../../index';
import { Confetti } from './Confetti';

export const SProgress = styled.div`
  height: 24px;
  width: 100%;
  background-color: #E4E4E4;
  margin: 40px 0px 24px 0px;
  .bar-done{
    width:${ ({percentage}) => `${percentage}%` };
    background-color:green;
    height:100%;
    transition:.5s;
  }   
  iframe{
    width:350px;
    height:350px;
    border:none;
    position:absolute;
  } 
`

const Progress = () => {
  const {tasks} = useRootContext();
  const tasksDone = tasks.filter(task => task.done === true).length;
  const percentageDone = tasksDone / tasks.length * 100 || 0;
  return (
    <>
      <Confetti visible={percentageDone === 100}/>
      <SProgress percentage={percentageDone}>
        <div className="bar-done"></div>
      </SProgress>
    </>
  )
}

export default Progress
