import { useState } from 'react'
import './style.css'
import GenericButton from '../genericButton';
import { useTaskContext } from '../../services/taskServices/UseTaskContext';

interface ITaskItemProps{
    text: string;
    id: number;
}

const TaskItem = ({ text, id } : ITaskItemProps) => {

    const { taskData, setTaskData } = useTaskContext()
    const [editedText, setEditedText] = useState(text);
    const [isEdited, setIsEdited] = useState(false);

    const handleEditTask = (newText: string) => {
        setEditedText(newText); 
        const updatedTask = taskData.map((task) =>
          task.id === id ? { ...task, text: newText } : task
        );
        setTaskData(updatedTask);
    };

    const handleDeleteTask = () => {
        const updatedTasks = taskData.filter((task) => task.id !== id);
        setTaskData(updatedTasks);
    };

    const handleDoneTask = () => {
        const updatedStatusTasks = taskData.map((task) =>
          task.id === id ? { ...task, isDone: true } : task
        );
        setTaskData(updatedStatusTasks);
    };
    
    return(
        <div className='conatiner_taskItem'>
            <input 
                type="text" 
                name="inputTaskItem"  
                value={editedText || undefined}  
                onChange={(e) => handleEditTask(e.target.value)} 
                onFocus={() => setIsEdited(true)} 
                onKeyDown={() => setIsEdited(false)}
                data-testid={`task-item-${id}`}
            />
            {
                isEdited && (
                    <div className='buttons_taskItem'>
                        <GenericButton
                            onClick={()=> handleDeleteTask()}
                            backgroundColor= 'var(--delete-button)'
                            icon={
                                <svg width={23.4} height={23.4} fill="#ffffff" viewBox="0 0 24 24">
                                    <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm3.75 10.5h-7.5a.75.75 0 1 1 0-1.5h7.5a.75.75 0 1 1 0 1.5Z" />
                                </svg>
                            }
                            height='48px'
                            width='42px'                        
                        />
                         <GenericButton
                            onClick={() => handleDoneTask()}
                            backgroundColor= 'var(--bar_button-green)'
                            icon={
                                <svg width={23.4} height={23.4} fill="#ffffff" viewBox="0 0 24 24">
                                    <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm5.074 6.482-6.3 7.5a.748.748 0 0 1-.562.268h-.013a.75.75 0 0 1-.557-.248l-2.7-3a.751.751 0 0 1 .88-1.186c.09.045.17.107.234.182l2.123 2.36 5.747-6.84a.75.75 0 0 1 1.148.964Z" />
                                </svg>
                            }
                            height='48px'
                            width='42px'
                        />
                    </div>
                )
            }
        </div>
    )
}
export default TaskItem