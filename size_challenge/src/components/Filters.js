import { FlexRow } from "../styles"
import ButtonComponent from "./Button"
import { useState } from "react"
import {FaSearch} from 'react-icons/fa'
import {Container, Input, Button} from "../styles"

function Filters(props){
    const [status, setStatus] = useState()
    function changeEvent(e){
        setStatus(e.target.innerText)
        props.filterTasks(e.target.innerText)
    }

    return(
        <FlexRow margin_top="20" jc="space-between">
            <div>
                <ButtonComponent label="Done" event={changeEvent} active={status === 'Done'}/>
                <ButtonComponent label="Pending" event={changeEvent} active={status === 'Pending'}/>
            </div>
        <Container color="#FFFFFF" large="65">
            <Input placeholder="Search Items" large="93"/>
            <Button large="7" color="#FFFFFF">
                <FaSearch size={15} opacity={.5}/> 
            </Button>
        </Container>
        </FlexRow>
    )
}

export default Filters