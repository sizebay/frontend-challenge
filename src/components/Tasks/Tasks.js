import styled from "styled-components"
import Task from "../Task/Task";
import { useRootContext } from "../../index";
import EmptyMessage from "../EmptyMessage/EmptyMessage";

const STasks = styled.ul`
max-height:250px;
margin: 16px 0px 101px 0px;
padding: 0px;
overflow:hidden auto;
scrollbar-width:thin;
margin-top: 1rem;
padding: 0px;
@media screen and (max-width: 391px) and (max-height:900px) {
    max-height:400px;
}
`

const Tasks = () => {
    const { filteredTasks, searchTask , typeAction } = useRootContext();
    const foundTasks = filteredTasks.filter(task => task.content.includes(searchTask)).map(({content, id}) => <Task key={id} id={id}>{content}</Task>)     

    return (
        <STasks>
            { 
                filteredTasks.length ? 
                    foundTasks.length ? foundTasks : <EmptyMessage type="noTasksFound"/>
                :
                    typeAction === 'all_tasks' ? <EmptyMessage type="noTasks"/> : 
                    typeAction === 'done_tasks' ? <EmptyMessage type="noTasksDone"/> : <EmptyMessage type="noTasksPending"/>
            }
        </STasks>
    )
}

export default Tasks;