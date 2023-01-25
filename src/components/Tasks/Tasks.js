// import React from 'react'
// import styled from 'styled-components'
// import { useRootContext } from '../..'
// import {Task} from '../Task/Task'

// const STasks = styled.ul`
// width: 100%;
// list-style: none;
// margin: 0px;
// padding: 0px;
// li{
//   background-color: transparent;
//   margin: 0px;
//   padding: 0px;
// }
// `


// export default function Tasks(){
//   const {tasks} = useRootContext();
//   const tasksJSX = tasks.map(task =><li key={task.id}><Task id={task.id} content={task.content}/></li>)

//   console.log(tasks)

//   return (
//     <STasks>
//       {tasksJSX}
//     </STasks>
//   )
// }

import styled from "styled-components"
import Task from "../Task/Task";
import { useRootContext } from "../../index";
import EmptyMessage from "../EmptyMessage/EmptyMessage";

const STasks = styled.ul`
max-height:200px;
margin: 0px;
padding: 0px;
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