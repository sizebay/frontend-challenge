import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import "bootstrap-icons/font/bootstrap-icons.css"

// Context
import { ItemsContext } from "../context/ItemsContext"

const SearchContainer = styled.div`
    > .invisible {
        visibility: hidden;
    }

    @media (max-width: 992px) {
        display: flex;
        flex-direction: column-reverse;
    }
`

const Filter = styled.div`
    display: flex;
    float: left;
    margin-top: 3px;
    margin-bottom: 24px;

    @media (max-width: 992px) {
        justify-content: end;
        padding-top: 11px;
        margin-bottom: 16px;

        div:last-child {
            margin-right: 0;
        }
    }
`

export const FilterOption = styled.div`
    height: 33px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #DBDBDB;
    border-radius: 17px;
    line-height: 33px;
    padding: 0 16px;
    font-size: 14px;
    margin-right: 8px;
    cursor: pointer;
    background-color: ${props => props.selected ? '#F7F7F8' : '#FFFFFF'};
    border: 1px solid ${props => props.selected ? '#4DA6B3' : '#DBDBDB'};
    color: ${props => props.selected ? '#4DA6B3' : '#848484'};

    > i {
        font-size: 16px;
        display: ${props => props.selected ? 'inline' : 'none'};
    }
`

const SearchInput = styled.div`
    float: right;

    > form input {
        width: 410px;
        height: 40px;
        border: 1px solid #DBDBDB;
        border-right: 0;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        box-sizing: border-box;
        padding: 0 16px;
        outline: none;
        color: #848484;
        font-size: 14px;
    }

    > form button {
        width: 40px;
        height: 40px;
        border: 1px solid #DBDBDB;
        border-left: 0;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        color: #848484;
        background-color: #FFFFFF;
        font-size: 17px;
        cursor: pointer;
    }

    @media (max-width: 992px) {
        width: 100%;

        > form input {
            width: calc(100% - 40px);
        }
    }
`

const Search = () => {
    const { 
        items, 
        setItems, 
        doneSelected, 
        setDoneSelected, 
        pendingSelected, 
        setPendingSelected, 
        searchInput, 
        setSearchInput
    } = useContext(ItemsContext)

    // Function to filter items
    const filterItems = (filter) => {
        if (filter === 'done') {
            if (doneSelected) {
                setDoneSelected(false)
            } else {
                setDoneSelected(true)
            }
        }

        if (filter === 'pending') {
            if (pendingSelected) {
                setPendingSelected(false)
            } else {        
                setPendingSelected(true)
            }
        }
    }

    // Function to search items
    const handleSearch = (e) => {
        e.preventDefault()

        if (searchInput.length > 0) {
            const editedItems = items.map(item => {
                if (item.title.search(searchInput.trim()) !== -1) {
                    item.show = true
                } else {
                    item.show = false
                }

                return item
            })

            setItems(editedItems)
        }
    }

    return (

        <SearchContainer>

            <Filter>

                <FilterOption id="filter-done" selected={doneSelected} onClick={(e) => filterItems('done')}>
                    <i className="bi bi-check2"></i> Done
                </FilterOption>
                <FilterOption id="filter-pending" selected={pendingSelected} onClick={(e) => filterItems('pending')}>
                    <i className="bi bi-check2"></i> Pending
                </FilterOption>

            </Filter>

            <SearchInput>

                <form onSubmit={handleSearch}>

                    <input 
                        type="text" 
                        placeholder="Search items" 
                        maxLength="80" 
                        value={searchInput} 
                        onChange={(e) => setSearchInput(e.target.value)} 
                    />

                    <button type="submit">
                        <i className="bi bi-search"></i>
                    </button>
                    
                </form>

            </SearchInput>

        </SearchContainer>

    )
}

export default Search