import { Bar, ConfettiPosition, Container, Progress } from "./style";
import { useTodoProvider } from "../../Provider/Todo";
import { useMemo } from "react";
import ConfettiExplosion from 'react-confetti-explosion';

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

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