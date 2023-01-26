import { DisplayFlex } from "../styles"
import ButtonComponent from "./StatusButton"
import { useState } from "react"
import {FaSearch} from 'react-icons/fa'
import {BsFillXCircleFill} from 'react-icons/bs'
import {Container, Input, Button} from "../styles"

function Filters(props){
    const [clearButton, setClearButton] = useState(false)
    
    function onCancelSearchTask(){
        setClearButton(false)
        props.onSearchTask("")
    }

    function onSearchChange(e){
        const newSearchValue = e.target.value
        setClearButton(newSearchValue !== "")
        props.onSearchTask(newSearchValue)
    }

    return(
        <DisplayFlex margin="20px 0 0 0" jc="space-between">
            <div>
                <ButtonComponent label="Done" event={(e) => props.onChangeStatus(e.target.innerText)} active={props.status === 'Done'}/>
                <ButtonComponent label="Pending" event={(e) => props.onChangeStatus(e.target.innerText)} active={props.status === 'Pending'}/>
            </div>
            <Container color="#FFFFFF" large="65">
                <Input placeholder="Search Items" large="93" onChange={onSearchChange} value={props.searchValue}/>
                <Button large="7" color="#FFFFFF">
                    {
                        clearButton ? <BsFillXCircleFill size={20} color="#8D8D8D" onClick={onCancelSearchTask}/> : <FaSearch size={20} opacity={.5}/> 
                    }
                </Button>
            </Container>
        </DisplayFlex>
    )
}

export default Filters