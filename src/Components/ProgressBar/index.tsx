import { useEffect, useState } from 'react';
import { useAllTodos } from '../../Contexts/AllTodos';
import { Progress, ProgressBarContainer } from './styles';


interface TodosType {
    id: number;
    text: string;
    completed: boolean;
}

export function ProgressBar() {

    const { allTodos, todos } = useAllTodos()
    const [doneTodos, setDoneTodos] = useState<TodosType[]>([])

    function getDonePercentage() {
        setDoneTodos(todos.filter(todo => todo.completed === true))
    }

    useEffect(() => {
        getDonePercentage()
    }, [todos, allTodos])

    const percentage = (doneTodos.length / allTodos.length) * 100

    return (
        <ProgressBarContainer>
            <Progress percentage={percentage} />
        </ProgressBarContainer>
    )
}