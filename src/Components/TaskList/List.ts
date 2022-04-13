import styled from 'styled-components';

export const List = styled.div`
width: 100%;
height: 230px;
overflow-y: auto;
display: flex;
flex-direction: column;
padding-top: 8px;

&::-webkit-scrollbar {
    width: 10px;
    
}

& {
    scrollbar-width: thin;
    scrollbar-color: #90a4ae #cfd8dc;
}

&::-webkit-scrollbar-track {
    background: #e4e4e4;
    border: solid 4px transparent;
    border-radius: 9px;
}

&::-webkit-scrollbar-thumb {
    background-color: #848484;
    border: solid 4px transparent;
    border-radius: 9px;
    padding: 10px;
}
`