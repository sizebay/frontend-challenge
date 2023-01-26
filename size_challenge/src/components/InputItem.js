import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useState } from "react"
import {Container, Input, Button} from "../styles"
import styles from "./../styles/inputItem.module.css"

function InputItem(props){
    const [value = "", setValue] = useState()

    function onSubmit(){
        if(value !== "")
            props.onSubmit(value)
        setValue("")
    }

    return(
        <Container large="100" margin="20px 0 20px 0">
            <Input className={styles.inputItem} placeholder='Add new item...' large="93" value={value} onChange={e => setValue(e.target.value)}/>
            <Button className={styles.btn} color="#4DA6B3" large="8" onClick={onSubmit}>
                <BsFillPlusCircleFill color='#FFFFFF' size={20} />
            </Button>
        </Container>
    )
}

export default InputItem