import { FaCheckCircle, FaMinusCircle} from 'react-icons/fa';
import { useState } from "react"
import {Container, Input, Button} from "../styles"

function TaskCard(props){
    const [show, setShow] = useState()
    const [model = props.task.description, setModel] = useState()
    const [color = "#F4F4F4", setColor] = useState()

    function onChange(e){
        setModel(e.target.value);
        props.editTask(e.target.value);
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
        props.onUpdateStatus(props.task.id)
    }

    function setTaskModel(){
        setModel(props.description);
    }

    return(
        <div>
            <Container color={color} large="100" margin_top="20" onMouseOver={setShowOn} onMouseOut={setShowOff}>
                <Input large="86" value={model} onChange={onChange}/>             
                { show ? <>
                <Button color="#E34F4F" large="7"><FaMinusCircle size={20} color="FFFFFF" onClick={onDelete}/></Button>
                <Button color="#5DE290" large="7"><FaCheckCircle size={20} color="FFFFFF" onClick={onUpdateStatus}/></Button>
                </>: null }
            </Container> 
        </div>
    )
}

export default TaskCard