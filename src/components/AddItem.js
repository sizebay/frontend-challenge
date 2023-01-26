import { useContext, useState } from "react"
import "bootstrap-icons/font/bootstrap-icons.css"

// Styled
import { AddItemInput } from "./AddItem.styled"

// Context
import { ItemsContext } from "../context/ItemsContext"

const AddItem = () => {
    // Get context
    const { 
        items, 
        setItems, 
        setDoneSelected, 
        setPendingSelected, 
        setSearchInput 
    } = useContext(ItemsContext)

    const [ addInput, setAddInput ] = useState('')

    // Function to add item
    const handleAdd = (e) => {
        e.preventDefault()

        if (addInput.trim() !== '') {
            const newId = items.length + 1

            setItems([
                {
                    id: newId,
                    title: addInput.trim(),
                    show: true,
                    done: false
                },
                ...items
            ])

            setAddInput('')

            // Clear filters and search
            setDoneSelected(false)
            setPendingSelected(false)
            setSearchInput('')
        }
    }

    return (

        <AddItemInput>

            <form  onSubmit={handleAdd}>

                <input 
                    type="text" 
                    placeholder="Add new item..." 
                    maxLength="80" 
                    value={addInput} 
                    onChange={(e) => setAddInput(e.target.value)} 
                />
                
                <button type="submit">
                    <i className="bi bi-plus-circle-fill"></i>
                </button>

            </form>

        </AddItemInput>

    )
}

export default AddItem