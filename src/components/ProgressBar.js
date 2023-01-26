import { useContext, useEffect, useState } from "react"

// Styled
import { 
    FillBar, 
    FilledBar 
} from "./ProgressBar.styled"

// Context
import { ItemsContext } from "../context/ItemsContext"

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