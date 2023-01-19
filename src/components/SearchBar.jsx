import styled from "styled-components";
import {MdSearch} from "react-icons/md";

import {useContext} from "react";
import {TasksContext} from "../contexts/Tasks";

const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    width: 100%;
    max-width: 450px;
`;

const SearchBarInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    padding: 8px 16px;
`;

const SearchBarIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: #848484;
`;

function SearchBar() {
    const {setSearch, search} = useContext(TasksContext);
    return (
        <SearchBarContainer>
            <SearchBarInput placeholder="Search items" value={search} onChange={(e) => setSearch(e.target.value)} />
            <SearchBarIcon>
                <MdSearch size="24px" style={{color: "#848484"}} />
            </SearchBarIcon>
        </SearchBarContainer>
    );
}

export default SearchBar;
