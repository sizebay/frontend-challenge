import styled from 'styled-components'


export const Bar = styled.div`
    background: ${(props) => props.color} 0% 0% no-repeat padding-box;
    border-radius: 4px;
    width: 100%;
    height: 24px;
`;

export const BarStatus = styled.div`
  width: ${(props) => props.progress}%;
  height: inherit;
  background-color: ${(props) => props.color};
  border-radius: inherit;
`;

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: ${(props) => props.margin_top}px;
    justify-content: ${(props) => props.jc};
`;

export const StatusButton = styled.button`
    height: 33px;
    background: ${(props) => props.active ? "#F7F7F8" : "#FFFFFF"} 0% 0% no-repeat padding-box;
    border: 1px solid ${(props) => props.active ? "#4DA6B3" : "#DBDBDB"};
    border-radius: 17px;
    opacity: 1;
    margin: 5px;
    padding: 0px 15px 0px 15px;
    cursor: pointer;
    transition: 0.5s;


    label{
        text-align: left;
        font: normal normal normal 14px/19px Roboto;
        letter-spacing: 0px;
        color: ${(props) => props.active ? "#4DA6B3" : "#848484"};
        opacity: 1;
        cursor: pointer;
        margin-left: 5px;
    }  
`;

export const SearchInput = styled.input`
    width: 450px;
    height: 40px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #DBDBDB;
    border-radius: 4px;
    opacity: 1;
    color: #848484;
    font-size: 14px/19px;
    padding-left: 15px;
    :focus {
      outline: 0;
    }    
`;