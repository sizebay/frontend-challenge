import styled from "styled-components"

export const ListContainer = styled.div`
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

export const List = styled.div`
    overflow: visible;

    > :last-child {
        margin-bottom: 0;
    }
`

export const ItemInput = styled.input`
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

export const ItemOptions = styled.div`
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

export const Option = styled.button`
    width: 48px;
    height: 48px;
    border: 0;
    border-left: 0;
    color: #FFFFFF;
    background-color: ${props => props.color};
    font-size: 17px;
    cursor: pointer;
`

export const Item = styled.div`
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

export const NoneResults = styled.p`
    font-size: 14px;
    margin-top: 38px;
`