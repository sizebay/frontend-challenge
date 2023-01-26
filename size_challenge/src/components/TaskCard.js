import { FaCheckCircle, FaMinusCircle} from 'react-icons/fa';
import { useState } from "react"
import {Container, Input, Button} from "../styles"
import { Tooltip as ReactTooltip } from 'react-tooltip'
import styles from "./../styles/taskCard.module.css"

function TaskCard(props){
    const [model = props.task.description, setModel] = useState()

    function onChange(e){
        setModel(e.target.value);
        props.editTask(e.target.value, props.task.id);
    }

    function onDelete(){
        props.onDelete(props.task.id)
    }
    
    function onUpdateStatus(){
        if(props.task.status !== "Done")
            props.onUpdateStatus(props.task.id)
    }

    return(
        <div>
            <Container className={styles.parent} id={props.task.id} data-tooltip-content="Edit Task" large="100" margin="8px 0 0 0" color="#F4F4F4">
                <Input large="86" value={model} onChange={onChange}/>             
                <Button className={styles.btn} color="#E34F4F" large="7" onClick={onDelete}><FaMinusCircle size={20} color="#FFFFFF" /></Button>
                <Button className={styles.btn} color="#5DE290" large="7" onClick={onUpdateStatus}><FaCheckCircle size={20} color="#FFFFFF" /></Button>
            </Container> 
            <ReactTooltip anchorId={props.task.id} place="bottom"/>    
        </div>
    )
}

export default TaskCard