import { DisplayFlex } from "../styles"
import ButtonComponent from "./StatusButton"
import { useState } from "react"
import {FaSearch} from 'react-icons/fa'
import {BsFillXCircleFill} from 'react-icons/bs'
import {Container, Input, Button} from "../styles"

function Filters(props){
    const [status, setStatus] = useState("Pending")
    const [clearButton, setClearButton] = useState(false)
    const [searchValue, setSearchValue] = useState("");

    function onChangeStatus(e){
        setStatus(e.target.innerText)
        props.onChangeStatus(e.target.innerText)    
    }

    function onSearchTask(e){
        const v = e.target.value ? e.target.value : "";
        setSearchValue(v)
        props.onSearchTask(v)
        setClearButton(v !== "")
    }

    return(
        <DisplayFlex margin="20px 0 0 0" jc="space-between">
            <div>
                <ButtonComponent label="Done" event={onChangeStatus} active={status === 'Done'}/>
                <ButtonComponent label="Pending" event={onChangeStatus} active={status === 'Pending'}/>
            </div>
            <Container color="#FFFFFF" large="65">
                <Input placeholder="Search Items" large="93" onChange={onSearchTask} value={searchValue}/>
                <Button large="7" color="#FFFFFF">
                    {
                        clearButton ? <BsFillXCircleFill size={20} color="#8D8D8D" onClick={onSearchTask}/> : <FaSearch size={20} opacity={.5}/> 
                    }
                </Button>
            </Container>
        </DisplayFlex>
    )
}

export default Filters