import { FormEvent, useContext, useState } from 'react';
import { TaskContext } from '../../Context/TaskContext';
import ActionButton from '../ActionButton';
import TaskItemContainer from '../TaskItemContainer';
import TaskInputForm from '../TaskInputForm';
import TaskItemInput from '../TaskItemInput';

function TaskNewItem() {

    const { createTask } = useContext(TaskContext);

    let [description, setDescription] = useState("")
    let [isEditing, setIsEditing] = useState(false)

    const startEditing = () => {
        setIsEditing(true);
    }

    const cancelEditing = () => {
        setIsEditing(false);
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        addTask();
    }

    const addTask = () => {
        createTask(description);
        setIsEditing(false);
        setDescription("");
    }

    return (
        <TaskItemContainer 
            onClick={() => startEditing()} 
            onClickOutside={() => cancelEditing()}
            isEditing={isEditing}
        >
            <TaskInputForm 
                onSubmit={(e) => handleSubmit(e)}
                onReset={() => cancelEditing()}
            >

                <TaskItemInput
                    placeholder='Add new task...'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onEscape={() => cancelEditing()}
                    dataCy="new-task-input"
                />

                <ActionButton 
                    variant="create" 
                    onClick={() => addTask()} 
                    enabled={isEditing}
                    dataCy="new-task-button"
                />
            </TaskInputForm>
        </TaskItemContainer>
    );
}

export default TaskNewItem;