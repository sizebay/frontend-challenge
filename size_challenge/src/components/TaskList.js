import { ContainerList, P } from "../styles"
import TaskCard from "./TaskCard"

function TaskList(props){
    const emptyMsg = props.status === 'Done' ? "There are no items marcked as done. Clear the filter here to see all items"
    : "Your search found no results. Clean the search here to see all items" 
    
    return(
        <ContainerList>
            {
                props.tasks.length > 0 &&
                props.tasks.map((task) => (
                    <TaskCard task={task} key={task.id} onDelete={props.onDelete} onUpdateStatus={props.onUpdateStatus} editTask={props.editTask}/>
                ))
            }
            {
                props.tasks.length === 0 && <P>
                    {emptyMsg}
                </P>
            }
            
        </ContainerList>
    )
}

export default TaskList