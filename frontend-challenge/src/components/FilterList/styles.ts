import styled from 'styled-components'

export const FilterListContainer = styled.div`
    display: grid;
    grid-template-columns: 35% auto;
    align-items: center;
    margin: 24px 0px;
`;

export const FilterListActions = styled.div`
    display: flex;
    align-items: center;
`;

export const FilterListSearch = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const FilterListInput = styled.input`
    background-color: #FFFFFF;
    color: #848484;
    height: 33px;
    width: 85%;
    padding: 5px 8px;
    border: 1px solid #DBDBDB;
    border-radius: 4px 0px 0px 4px;
    border-right: none;
    outline: none;
    font-size: 14px;
    ::placeholder {
        color: #848484;
        font-size: 14px;
    }
`;
