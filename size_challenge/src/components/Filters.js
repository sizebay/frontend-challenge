import { FlexRow, SearchInput } from "../styles"
import Button from "./Button"
import { useState } from "react"
import {BsSearch} from 'react-icons/bs';

function Filters(){
    const [status, setStatus] = useState()


    function changeEvent(e){
        setStatus(e.target.innerText)
    }

    const searchIcon = {
        position: "relative",           
    }
    

    return(
        <FlexRow margin_top="20" jc="space-between">
            <div>
                <Button label="Done" event={changeEvent} active={status === 'Done'}/>
                <Button label="Pending" event={changeEvent} active={status === 'Pending'}/>
            </div>
            <div>
                <SearchInput placeholder="Search Item" type="text"/>
                <span style={searchIcon}>
                    <BsSearch color="#848484"></BsSearch>
                </span>
                
            </div>
        
        </FlexRow>
    )
}

export default Filters