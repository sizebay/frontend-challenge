import { useState } from 'react'
import { useTaskContext } from '../../services/taskServices/UseTaskContext';
import GenericButton from '../genericButton';
import './style.css'


const CreateTaskBar = () => { 

    const [createTask, setCreateTask] = useState('')
    const { setTaskData } = useTaskContext();

    const handleCreateTask = () => {

        if (createTask.trim() !== "") {
          const newTask = {
            id: Math.floor(Math.random() * 10000) + 1,
            text: createTask,
            isDone: false
          };
    
          setTaskData((prevTasks) => [...prevTasks, newTask]);
    
          setCreateTask("");
        }
    };

      
    return(
        <div className='container_createTaskBar'>
            <input
                type='text'
                onChange={(e) => setCreateTask(e.target.value)}
                placeholder={'Add new item…'}
                value={createTask}
            />
            <GenericButton
                data-testid= 'create-task-button'
                onClick={handleCreateTask}
                backgroundColor='var(--highlight)'
                height='48px'
                width='44px'
                margin='0'
                icon={
                    <svg width={20} height={20} fill="#FFFFFF" viewBox="0 0 24 24">
                        <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm3.75 10.5h-3v3a.75.75 0 1 1-1.5 0v-3h-3a.75.75 0 1 1 0-1.5h3v-3a.75.75 0 1 1 1.5 0v3h3a.75.75 0 1 1 0 1.5Z" />
                    </svg>
                }
            />
        </div>
    )
}


export default CreateTaskBar