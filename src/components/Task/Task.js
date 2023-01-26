
import less from './minus.svg'
import checked from './checked.svg'
import React from 'react'
import { useRootContext } from '../../index';
import { deleteTask, finishTask } from '../../controllers/task';
import { useToggle } from '../../Hooks/useToggle';
import { SButtons, STask } from './style';

const Task = ({ id, children }) => {
    const { status:selected, toggleStatus:toggleSelected } = useToggle();
    const { setTasks } = useRootContext();

    return (
        <STask onClick={ toggleSelected }>
            <span>{children}</span>
            {
                selected && 
                <SButtons>
                    <button onClick={() => deleteTask(setTasks, id)}><img src={less} alt='delete task'/></button>
                    <button onClick={() => {
                      finishTask(setTasks, id)
                    }}><img src={checked} alt='mark as done'/></button>
                </SButtons>
            }
        </STask>
    )
}

export default Task
