
import less from './minus.svg'
import checked from './checked.svg'
import React, { useState, useEffect } from 'react'
import { useRootContext } from '../../Hooks/useRootContext.js';
import { deleteTask, finishTask, editTask } from '../../controllers/task';
import { useToggle } from '../../Hooks/useToggle';
import { SButtons, STask } from './style';

const Task = ({ id, children }) => {
    const { status:selected, setStatus:setSelected, toggleStatus:toggleSelected } = useToggle();
    const { setTasks } = useRootContext();
    const [ isEdit,setIsEdit] = useState(false);

    useEffect(() => { isEdit && setSelected(false); return }, [ isEdit ]);

    return (
        <STask onClick={ toggleSelected }>
            <div className="taskEditable">
                <input 
                    value={children}
                    className={isEdit ? 'editable' : ''}
                    onBlur={() => setIsEdit(false)}
                    onChange={(e) => editTask(setTasks, id, e.target.value)}
                    readOnly={!isEdit} onDoubleClick={() => setIsEdit(true)}
                />
                <span></span>
            </div>
            {
                selected && !isEdit &&
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
