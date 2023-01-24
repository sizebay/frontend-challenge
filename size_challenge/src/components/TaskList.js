import { useState } from "react";
import styled from "styled-components"
import TaskCard from "./TaskCard"

const ContainerList = styled.div`
    height: 280px;
    overflow-y: scroll;
    padding: 20px;
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

function TaskList(props){
    return(
        <ContainerList>
            {
                props.tasks.length > 0 &&
                props.tasks.map((task) => (
                    <TaskCard task={task} key={task.id} onDelete={props.onDelete} onUpdateStatus={props.onUpdateStatus}/>
                ))
            }
            {
                props.tasks.length === 0 && <p>
                    Your search found no results. Clean the search here to see all items
                </p>
            }
        </ContainerList>
    )
}

export default TaskList