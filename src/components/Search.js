import { useContext, useEffect, useState } from "react"
import "bootstrap-icons/font/bootstrap-icons.css"

// Styled
import { 
    SearchContainer,
    Filter,
    FilterOption,
    SearchInput
} from "./Search.styled"

// Context
import { ItemsContext } from "../context/ItemsContext"

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
        filter === 'done' ? setDoneSelected(!doneSelected) : setPendingSelected(!pendingSelected)
    }

    // Function to search items
    const handleSearch = (e) => {
        e.preventDefault()

        if (searchInput.length > 0) {
            const editedItems = items.map(item => {
                item.show = item.title.search(searchInput.trim()) !== -1

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