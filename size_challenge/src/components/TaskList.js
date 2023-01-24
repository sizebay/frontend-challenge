import styled from "styled-components"
import TaskCard from "./TaskCard"

const ContainerList = styled.div`
    height: 380px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
    width: 8px;
    
    }
    
    ::-webkit-scrollbar-thumb {
        background: #848484; 
        border-radius: 9px;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #E4E4E4; 
    }
`;

const P = styled.p`
    text-align: left;
    font: normal normal normal 14px/19px Roboto;
    color: #848484;
    opacity: 1;
    padding-top: 20px;
`;

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