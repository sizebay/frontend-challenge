import { Bar, ConfettiPosition, Container, Progress } from "./style";
import { useTodoProvider } from "../../Provider/Todo";
import { useMemo } from "react";
import ConfettiExplosion from 'react-confetti-explosion';

export default function ProgressBar() {

  const { todoTask } = useTodoProvider();

  const totalCompletedTasks = useMemo(() => {
    if(todoTask.length === 0) return 0

    const totalCompleted: number = todoTask.filter((item) => item.isCompleted).length
    const allCompleted: number = (totalCompleted / todoTask.length) * 100

    return allCompleted
  }, [todoTask])

  return(
    <Container>
      <Bar>
        <Progress 
          value={totalCompletedTasks} 
          shouldShow={totalCompletedTasks > 0? 'flex' : 'none'}
        />
        <ConfettiPosition>
        {
          totalCompletedTasks === 100? 
          <ConfettiExplosion force={0.5} duration={3000}/>
          :
          <></>
        }
        </ConfettiPosition>
      </Bar>
    </Container>
  )
}