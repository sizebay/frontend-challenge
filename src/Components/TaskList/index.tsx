import { useContext } from 'react';
import { TaskContext } from '../../Context/TaskContext';
import Message from '../Message';
import TaskItem from '../TaskItem';
import TaskNewItem from '../TaskNewItem';
import { List } from './List';


function TaskList() {

    const { filteredTasks, currentStatus } = useContext(TaskContext);

    return (
        <div>
            {currentStatus !== 'done' && <TaskNewItem />}

            <Message />

            <List>
                {filteredTasks.map((item, index) => (
                    <TaskItem task={item} key={index}/>
                ))}
            </List>
        </div>
    )
}

export default TaskList;