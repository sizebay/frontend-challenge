import { MinusCircle, PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { ActionButtons, DeleteButton, FinishButton, NewTextInput, TaskItemContainer, TaskText } from './styles';

interface TaskItemProps {
    id: number;
    title: string;
    completed: boolean;
}

export function TaskItem({ id, title, completed }: TaskItemProps) {

    const [isEditingModeEnabled, setIsEditingModeEnabled] = useState(false);

    return (
        <TaskItemContainer>
            {isEditingModeEnabled ?
                <NewTextInput
                    placeholder="Enter new task title"
                    value={title}
                    onChange={(e) => { }}
                /> :
                <>
                    <TaskText onClick={() => setIsEditingModeEnabled(true)}>{title}</TaskText>
                    <ActionButtons>
                        <DeleteButton><MinusCircle size={24} weight='fill' color='white' /></DeleteButton>
                        <FinishButton><PlusCircle size={24} weight='fill' color='white' /> </FinishButton>
                    </ActionButtons>
                </>
            }
        </TaskItemContainer>
    );
}