import { useContext } from "react"
import styled from "styled-components"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Tooltip } from 'react-tooltip'

// Context
import { ItemsContext } from "../context/ItemsContext"

const ListContainer = styled.div`
    width: 688px;
    max-height: 216px;
    overflow-y:auto;
    overflow-x:hidden;
    padding-right: 4px;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #E4E4E4; 
        border-radius: 4px
    }
    
    ::-webkit-scrollbar-thumb {
        background: #848484;
        border-radius: 4px
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
        border-radius: 10px
    }

    @media (max-width: 992px) {
        width: calc(100% + 8px);
        max-height: 272px;
    }
`

const List = styled.div`
    overflow: visible;

    > :last-child {
        margin-bottom: 0;
    }
`

const ItemInput = styled.input`
    width: 100%;
    height: 48px;
    background-color: #F7F7F7;
    border: 1px solid #DBDBDB;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 0 16px;
    outline: none;
    color: #848484;
    font-size: 14px;

    ::placeholder {
        opacity: .5;
    }
`

const ItemOptions = styled.div`
    position: absolute;
    display: none;
    right: 0;

    > button:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    @media (max-width: 992px) {
        display: block;
    }
`

const Option = styled.button`
    width: 48px;
    height: 48px;
    border: 0;
    border-left: 0;
    color: #FFFFFF;
    background-color: ${props => props.color};
    font-size: 17px;
    cursor: pointer;
`

const Item = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 8px;
    position: relative;

    &:hover {
        ${ItemOptions} {
            display: block;
        }

        ${ItemInput} {
            background-color: #FFFFFF;
        }
    }

    > .custom-tooltip {
        position: fixed;
        z-index: 9999;
    }
`

const NoneResults = styled.p`
    font-size: 14px;
    margin-top: 38px;
`

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