import styled from 'styled-components'

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: ${(props) => props.margin_top}px;
    justify-content: ${(props) => props.jc};
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: ${(props) => props.large}%;
    height: 48px;
    background: ${(props) => props.color} 0% 0% no-repeat padding-box;
    border: 1px solid #DBDBDB;
    opacity: 1;
    border-radius: 4px;
    margin-top: ${(props) => props.margin_top}px;
`;

export const Input = styled.input`
    width: ${(props) => props.large}%;
    border: none;
    :focus{
        outline: none;
    }
    color: #848484;
    font-size: 14px/19px;
    padding-left: 15px;
    opacity: ${(props) => props.opacity ? props.opacity : 1};
    background-color: transparent;
`;

export const Button = styled.button`
    width: ${(props) => props.large}%;
    height: 100%;
    border: none;
    background-color: ${(props) => props.color};
    opacity: ${(props) => props.opacity ? props.opacity : 1};
    cursor: pointer;
`
