import { useContext, useState } from "react"
import styled from "styled-components"
import "bootstrap-icons/font/bootstrap-icons.css"

// Context
import { ItemsContext } from "../context/ItemsContext"

const AddItemInput = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 16px;

    > form {
        width: 100%;
    }

    > form input {
        width: calc(100% - 48px);
        height: 48px;
        background-color: #F7F7F7;
        border: 1px solid #DBDBDB;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        box-sizing: border-box;
        padding: 0 16px;
        outline: none;
        color: #848484;
        font-size: 14px;
    }

    > form input::placeholder {
        opacity: .5;
    }

    > form button {
        width: 48px;
        height: 48px;
        border: 0;
        border-left: 0;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        color: #848484;
        background-color: #4DA6B3;
        opacity: .5;
        font-size: 17px;
        cursor: pointer;
    }

    > form button i {
        opacity: 1;
        color: #FFFFFF;
    }
`

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