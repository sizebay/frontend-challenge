import React from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";

const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-radius: 4px;
    width: 100%;
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    gap: 8px;
    align-items: center;
`;

function Search() {
    return (
        <SearchContainer>
            <ButtonGroup>
                <FilterButton text="Done" />
                <FilterButton text="Pending" />
            </ButtonGroup>

            <SearchBar />
        </SearchContainer>
    );
}

export default Search;
