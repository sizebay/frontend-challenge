import { FlexRow, InputSearch} from "../styles"
import Button from "./Button"
import { useState } from "react"
import {FaSearch} from 'react-icons/fa'

function Filters(){
    const [status, setStatus] = useState()


    function changeEvent(e){
        setStatus(e.target.innerText)
    }

    return(
        <FlexRow margin_top="20" jc="space-between">
            <div>
                <Button label="Done" event={changeEvent} active={status === 'Done'}/>
                <Button label="Pending" event={changeEvent} active={status === 'Pending'}/>
            </div>
            <InputSearch>
                <input placeholder="Search Item" type="text"></input>
                <button><FaSearch color="#848484"></FaSearch></button>
            </InputSearch>
        </FlexRow>
    )
}

export default Filters