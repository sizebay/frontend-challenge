import { FaCheckCircle, FaMinusCircle} from 'react-icons/fa';
import { useState } from "react"
import {Container, Input, Button} from "../styles"
import { Tooltip as ReactTooltip } from 'react-tooltip'

function TaskCard(props){
    const [show, setShow] = useState()
    const [model = props.task.description, setModel] = useState()
    const [color = "#F4F4F4", setColor] = useState()

    function onChange(e){
        setModel(e.target.value);
        props.editTask(e.target.value, props.task.id);
    }

    function onDelete(){
        props.onDelete(props.task.id)
    }
    
    function setShowOn(){
        setColor("#FFFFFF")
        setShow(true)
    }

    function setShowOff(){
        setColor("#F4F4F4")
        setShow(false)
    }

    function onUpdateStatus(){
        if(props.task.status !== "Done")
            props.onUpdateStatus(props.task.id)
    }

    return(
        <div>
            
                <Container id={props.task.id} data-tooltip-content="Edit Task"color={color} large="100" margin="8px 0 0 0" onMouseOver={setShowOn} onMouseOut={setShowOff}>
                    <Input large="86" value={model} onChange={onChange}/>             
                    { show ? <>
                    <Button color="#E34F4F" large="7" onClick={onDelete}><FaMinusCircle size={20} color="FFFFFF" /></Button>
                    <Button color="#5DE290" large="7" onClick={onUpdateStatus}><FaCheckCircle size={20} color="FFFFFF" /></Button>
                    </>: null }
           
                </Container> 

                <ReactTooltip anchorId={props.task.id} place="bottom"/>
           
        </div>
    )
}

export default TaskCard