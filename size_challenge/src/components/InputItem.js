import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useState } from "react"
import {Container, Input, Button} from "../styles"

function InputItem(props){
    const [opacity, setOpacity] = useState()
    const [value = "", setValue] = useState()
    const [color = "#F4F4F4", setColor] = useState()

    function onSubmit(){
        if(value != "" || value)
            props.onSubmit(value)

        setValue("")
        turnInputOff()
    }

    function turnInputOn(){
        setColor("#FFFFFF")
        setOpacity(1)
        
    }

    function turnInputOff(){
        setColor("#F4F4F4")
        setOpacity(0.5)
        
    }

    return(
        <Container color={color} large="100" margin_top="20" onFocus={turnInputOn} onBlur={turnInputOff}>
            <Input placeholder='Add new item...' opacity={opacity} large="93" value={value} onChange={e => setValue(e.target.value)}/>
            <Button color="#4DA6B3" opacity={opacity} large="8" onClick={onSubmit}>
                <BsFillPlusCircleFill color='#FFFFFF' size={20} opacity={opacity}/>
            </Button>
        </Container>
    )
}

export default InputItem