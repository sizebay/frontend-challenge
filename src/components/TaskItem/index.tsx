import { MinusCircle, PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { useTasks } from '../../contexts/TasksContext';
import { ActionButtons, DeleteButton, FinishButton, NewTextInput, TaskItemContainer, TaskText } from './styles';

interface TaskItemProps {
    id: number;
    title: string;
    completed: boolean;
}

export function TaskItem({ id, title, completed }: TaskItemProps) {

    const [isEditingModeEnabled, setIsEditingModeEnabled] = useState(false);
    const { deleteTask, completeTask } = useTasks()

    return (
        <TaskItemContainer completed={completed === true} >
            {isEditingModeEnabled ?
                <NewTextInput
                    placeholder="Enter new task title"
                    value={title}
                    onChange={(e) => { }}
                /> :
                <>
                    <TaskText onClick={() => setIsEditingModeEnabled(true)}>{title}</TaskText>
                    <ActionButtons>
                        <DeleteButton onClick={() => deleteTask(id)}>
                            <MinusCircle size={24} weight='fill' color='white' />
                        </DeleteButton>
                        <FinishButton onClick={() => completeTask(id)}>
                            <PlusCircle size={24} weight='fill' color='white' />
                        </FinishButton>
                    </ActionButtons>
                </>
            }
        </TaskItemContainer>
    );
}