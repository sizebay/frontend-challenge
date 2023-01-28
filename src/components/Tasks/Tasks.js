import Task from "../Task/Task";
import { useRootContext } from '../../Hooks/useRootContext.js';
import EmptyMessage from "../EmptyMessage/EmptyMessage";
import { STasks } from "./style";


const Tasks = () => {
    const { filteredTasks, searchTask , typeAction } = useRootContext();
    const foundTasks = filteredTasks.filter(task => task.content.includes(searchTask)).map(({content, id}) => <Task key={id} id={id}>{content}</Task>)     

    return (
        <STasks>
            { 
                filteredTasks.length ? 
                    foundTasks.length ? foundTasks : <EmptyMessage type="noTasksFound"/>
                :
                    typeAction === 'done_tasks' ? <EmptyMessage type="noTasksDone"/> : <EmptyMessage type="noTasksPending"/>
            }
        </STasks>
    )
}

export default Tasks;