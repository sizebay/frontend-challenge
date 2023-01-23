import { useContext, useEffect, useState } from "react"
import styled from "styled-components"

// Context
import { ItemsContext } from "../context/ItemsContext"

const FillBar = styled.div`
    height: 20px;
    width: 100%;
    background-color: #E4E4E4;
    border-radius: 4px;
    margin-bottom: 24px;
`
  
const FilledBar = styled.div`
    height: 100%;
    width: ${props => props.completed}%;
    background-color: #5DE290;
    border-radius: inherit;
`

const ProgressBar = () => {
    const { items } = useContext(ItemsContext)
    const [ completed, setCompleted ] = useState(0)

    // Function to change progress bar
    useEffect(() => {
        if (items.length > 0) {
            const doneItems = items.filter(item => item.done === true).length
            const totalItems = items.length

            setCompleted((100 / totalItems) * doneItems)
        } else {
            setCompleted(0)
        }
    }, [ items, completed ])

    return (

        <FillBar id="progress-bar">

            <FilledBar completed={completed} />
            
        </FillBar>

    );
  };
  
  export default ProgressBar;