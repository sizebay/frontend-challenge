import React from 'react'
import { useRootContext } from '../../Hooks/useRootContext.js';
import { Confetti } from './Confetti';
import { SProgress } from './style';

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
