import { useContext } from "react"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Tooltip } from 'react-tooltip'

// Styled
import { 
    ListContainer, 
    List, 
    ItemInput, 
    ItemOptions, 
    Option, 
    Item, 
    NoneResults 
} from "./ItemsList.styled"

// Context
import { ItemsContext } from "../context/ItemsContext"

const ItemsList = () => {
    // Get context
    const { 
        items, 
        setItems, 
        doneSelected, 
        setDoneSelected, 
        pendingSelected, 
        setPendingSelected, 
        refreshFilter, 
        setRefreshFilter, 
        searchInput, 
        setSearchInput
    } = useContext(ItemsContext)

    // Function to delete item
    const deleteItem = (idItem) => {
        const filteredItems = items.filter(item => item.id !== idItem)

        setItems(filteredItems)
    }

    // Function to set item as done
    const doneItem = (idItem) => {
        const editedItems = items.map(item => {
            if (item.id === idItem) {
                item.done = true
            }

            return item
        })

        setItems(editedItems)

        setRefreshFilter(refreshFilter + 1)
    }

    // Function to edit item title
    const editItem = (idItem, titleItem) => {
        const editedItems = items.map(item => {
            if (item.id === idItem) {
                item.title = titleItem
            }

            return item
        })

        setItems(editedItems)
    }

    // Function to clear search
    const clearSearch = (e) => {
        e.preventDefault()

        setDoneSelected(false)
        setPendingSelected(false)
        setSearchInput('')
        
        const editedItems = items.map(item => {
            item.show = true
            
            return item
        })

        setItems(editedItems)
    }

    // Returns if no items
    if (items.filter(item => item.show === true).length === 0) {
        if (doneSelected) {
            return (
                <NoneResults>There are no items marked as done. <a href="/" onClick={clearSearch}>Clear the filter here</a> to see all items.</NoneResults>
            )
        }

        if (pendingSelected) {
            return (
                <NoneResults>There are no items marked as pending. <a href="/" onClick={clearSearch}>Clear the filter here</a> to see all items.</NoneResults>
            )
        }

        if (searchInput.length > 0) {
            return (
                <NoneResults>Your search found no results. <a href="/" onClick={clearSearch}>Clean the search here</a> to see all items.</NoneResults>
            )
        }
    } else {
        // Return if there are items
        return (

            <ListContainer>

                <List>

                    {
                        items.map((item) => {
                            return (
                                item.show &&

                                    <Item key={item.id}>

                                        <ItemInput 
                                            type="text" 
                                            id={item.id} 
                                            placeholder="Edit item..." 
                                            value={item.title} 
                                            onChange={(e) => editItem(item.id, e.target.value)} 
                                            maxLength="80" 
                                        />

                                        <Tooltip 
                                            className="custom-tooltip" 
                                            anchorId={item.id} 
                                            content="Edit task" 
                                            place="bottom" 
                                        />

                                        <ItemOptions className="options">

                                            <Option color="#E34F4F" onClick={() => deleteItem(item.id)}>
                                                <i className="bi bi-dash-circle-fill"></i>
                                            </Option>

                                            {
                                                !item.done &&
                                                    <Option color="#5DE290" onClick={() => doneItem(item.id)}>
                                                        <i className="bi bi-check-circle-fill"></i>
                                                    </Option>
                                            }

                                        </ItemOptions>

                                    </Item>

                            )
                        })
                    }

                </List>

            </ListContainer>

        )
    }
}

export default ItemsList