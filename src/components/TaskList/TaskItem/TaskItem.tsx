import { useState, useRef } from 'react';
import { CheckCircle, MinusCircle } from '@phosphor-icons/react';
import { Button } from '../../Button/Button';
import { ItemText, TaskItemContainer, ButtonContainer, Input, TaskItemContainerEdit } from './TaskItem.styles';
import { deleteTheme, saveTheme } from '../../Button/Button.styles';
import { Tooltip } from '@mui/material';
import { toast } from 'react-toastify';
import { TaskProps, useTaskContext } from '../../../context/TaskContext';


interface TaskItemProps {
    task: TaskProps;
}

export function TaskItemComponent({ task }: TaskItemProps) {
    const { deleteTask, toggleDone, editTask } = useTaskContext();

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.taskText);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const blurTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const successToaster = (taskText: string) => toast.success(taskText, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const warningToaster = (taskText: string) => toast.warning(taskText, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const handleDelete = () => {
        deleteTask(task.id);
        successToaster('Task deleted: ' + (task.taskText.length > 50 ? task.taskText.substring(0, 50) + '...' : task.taskText))
    };

    const handleToggleDone = () => {
        const taskStatus = !task.completed;

        toggleDone(task.id);

        if(taskStatus){
            successToaster('Task done: ' + (task.taskText.length > 50 ? task.taskText.substring(0, 50) + '...' : task.taskText))
        }else{
            warningToaster('Task pending: ' + (task.taskText.length > 50 ? task.taskText.substring(0, 50) + '...' : task.taskText))
        }
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedText(e.target.value);
    };

    const handleSaveChanges = () => {
        if (editedText !== task.taskText) {
            editTask(task.id, editedText);
            successToaster('Task edited: ' + (editedText.length > 50 ? editedText.substring(0, 50) + '...' : editedText))
        }
        setIsEditing(false);
        if (blurTimeoutRef.current) {
            clearTimeout(blurTimeoutRef.current);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSaveChanges();
        }
    };

    const handleContainerBlur = () => {
        blurTimeoutRef.current = setTimeout(() => {
            if (!containerRef.current?.contains(document.activeElement)) {
                handleSaveChanges();
            }
        }, 0);
    };

    return (
        <>
            {
                isEditing ? (
                    <TaskItemContainerEdit data-cy={'editTaskId' + task.id} ref={containerRef} onClick={handleEditClick} onBlur={handleContainerBlur} >
                        <Input
                            data-cy={'inputEditTaskId' + task.id}
                            ref={inputRef}
                            type="text"
                            value={editedText}
                            onChange={(e) => handleInputChange(e)}
                            onKeyDown={handleKeyDown}
                            autoFocus
                        />
                        <ButtonContainer>
                            <Button
                                data-cy={'btnDeleteTaskId' + task.id}
                                theme={deleteTheme}
                                onButtonClick={handleDelete}>
                                <MinusCircle size={25} weight="fill" />
                            </Button>
                            <Button
                                data-cy={'btnTogleDoneTaskId' + task.id}
                                theme={saveTheme}
                                onButtonClick={handleToggleDone}>
                                <CheckCircle size={25} weight="fill" />
                            </Button>
                        </ButtonContainer>
                    </TaskItemContainerEdit>
                ) : (
                    <Tooltip title="Edit" arrow>
                        <TaskItemContainer data-cy={'openTask' + task.id} ref={containerRef} onClick={handleEditClick} onBlur={handleContainerBlur}>
                            <ItemText>{task.taskText}</ItemText>
                        </TaskItemContainer>
                    </Tooltip>
                )
            }
        </>
    );
}
