import { useEffect, useState } from 'react';
import { useReward } from 'react-rewards';
import { useAllTodos } from '../../Contexts/AllTodos';
import { Progress, ProgressBarContainer } from './styles';

interface TodosType {
    id: number;
    text: string;
    completed: boolean;
}

export function ProgressBar() {

    const { allTodos, todos } = useAllTodos()
    const { reward } = useReward('rewardId', 'confetti');

    const [doneTodos, setDoneTodos] = useState<TodosType[]>([])

    const percentage = (doneTodos.length / allTodos.length) * 100

    function getDonePercentage() {
        setDoneTodos(todos.filter(todo => todo.completed === true))
    }

    useEffect(() => {
        getDonePercentage()
    }, [todos, allTodos])

    useEffect(() => {
        percentage === 100 && reward()
    }, [percentage])


    return (
        <>
            <ProgressBarContainer>
                <Progress percentage={percentage} />
                <span id="rewardId" style={{ width: 2, height: 2, background: "red" }} />
            </ProgressBarContainer>
        </>
    )
}
