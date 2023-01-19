import styled from "styled-components";

import {useContext, useState} from "react";
import {TasksContext} from "../contexts/Tasks";

import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";

const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-radius: 4px;
    width: 100%;
    @media (max-width: 800px) {
        flex-direction: column-reverse;
        align-items: flex-end;
        gap: 10px;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    gap: 8px;
    align-items: center;
`;

function Search() {
    const {pendingMarked, completedMarked, completed, pending} = useContext(TasksContext);
    return (
        <SearchContainer>
            <ButtonGroup>
                <FilterButton text="Done" action={completedMarked} active={completed} />
                <FilterButton text="Pending" action={pendingMarked} active={pending} />
            </ButtonGroup>

            <SearchBar />
        </SearchContainer>
    );
}

export default Search;
