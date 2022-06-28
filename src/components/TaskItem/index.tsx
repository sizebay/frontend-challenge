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

    const { deleteTask, completeTask, editTaskTitle } = useTasks()
    const [isEditingModeEnabled, setIsEditingModeEnabled] = useState(false);
    const [newTitle, setnewTitle] = useState('')

    function handleEditTaskTitle() {
        setIsEditingModeEnabled(false)
        editTaskTitle(newTitle)
        console.log(newTitle)
    }

    return (
        <TaskItemContainer completed={completed === true} >
            {isEditingModeEnabled ?
                <NewTextInput
                    placeholder="Enter new task title"
                    value={newTitle}
                    onChange={(e) => { setnewTitle(e.target.value) }}
                    onBlur={handleEditTaskTitle}
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