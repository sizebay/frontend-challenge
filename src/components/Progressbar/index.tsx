import { useEffect } from 'react';
import { useReward } from 'react-rewards';
import { useTasks } from '../../contexts/TasksContext';
import { Progress, ProgressBarContainer, Reward } from './styles';

export function Progressbar() {

    const { allTasks, completedTasks } = useTasks()
    const percentage = allTasks.length > 0 ? (completedTasks.length / allTasks.length) * 100 : 0
    const { reward } = useReward('rewardId', 'confetti');

    useEffect(() => {
        percentage === 100 && reward()
    }, [percentage])

    return (
        <ProgressBarContainer>
            <Progress percentage={percentage} />
            <Reward id="rewardId" />
        </ProgressBarContainer>
    );
}