import { useContext, useEffect, useState } from 'react';
import ActionButton from '../ActionButton';
import { TaskItemDescription, Tooltip } from './TaskItem'
import TaskItemContainer from '../TaskItemContainer';
import TaskInputForm from '../TaskInputForm';
import TaskItemInput from '../TaskItemInput';
import Body from '../Body';
import { Task } from '../../Models/Task';
import { TaskContext } from '../../Context/TaskContext';

export interface Props {
    task: Task;
}

function TaskItem(props: Props) {

    const { updateTask, deleteTask, completeTask } = useContext(TaskContext)

    let [ isEditing, setIsEditing ] = useState(false)
    let [ description, setDescription ] = useState('')
    let [ currentTask, setCurrentTask ] = useState<Task>(props.task)

    useEffect(() => {
        setDescription(props.task.description)
        if(props.task.id != currentTask.id) {
            setCurrentTask(props.task);
            setIsEditing(false);
        }
    }, [props])

    function startEditing() {
        setIsEditing(true);
    }

    function cancelEditing() {
        setIsEditing(false);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setDescription(event.target.value);
        updateTask(props.task, event.target.value);
    }

    return (
        <TaskItemContainer 
            onClick={() => startEditing()} 
            onClickOutside={() => cancelEditing()}
            isEditing={isEditing}
            dataCy="task-item"
        >
            {!isEditing && (
                <TaskItemDescription data-cy="task-item-description">
                    <Body>{description}</Body>
                    <Tooltip data-cy="task-item-tooltip">Edit task</Tooltip>
                </TaskItemDescription>
            )}
            {isEditing && (
                <TaskInputForm 
                    onReset={() => cancelEditing()}
                >

                    <TaskItemInput
                        value={description}
                        onChange={(e) => handleChange(e)} 
                        onEscape={() => cancelEditing()}
                        dataCy="task-item-input"
                    />

                    <ActionButton variant="delete" onClick={() => deleteTask(props.task)} dataCy="delete-item-button" />
                    <ActionButton variant="save" onClick={() => completeTask(props.task)} dataCy="complete-item-button" />
                </TaskInputForm>
            )}
        </TaskItemContainer>
    );
}

export default TaskItem;