import styled from 'styled-components'

export const DisplayFlex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.fd ? props.fd : "row"};
    margin: ${(props) => props.margin};
    justify-content: ${(props) => props.jc ? props.jc : "center"};
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: ${(props) => props.large}%;
    height: 48px;
    background: ${(props) => props.color} 0% 0% no-repeat padding-box;
    border: 1px solid #DBDBDB;
    border-radius: 4px;
    margin: ${(props) => props.margin};
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
        transition: all 500ms ease-out;
    `;

export const confetti = {
    left: "50%",
    transform: "translate(80%)",
}

export const StatusButtonComponent = styled(Button)`
    height: 70%;
    background: ${(props) => props.active ? "#F7F7F8" : "#FFFFFF"} 0% 0% no-repeat padding-box;
    border: 1px solid ${(props) => props.active ? "#4DA6B3" : "#DBDBDB"};
    border-radius: 17px;
    margin: 5px;
    padding: 0px 15px 0px 15px;
    transition: 0.5s;

    label{
        text-align: left;
        font: normal normal normal 14px/19px Roboto;
        color: ${(props) => props.active ? "#4DA6B3" : "#848484"};
        opacity: 1;
        cursor: pointer;
        margin-left: 5px;
    }  
`;

export const ContainerList = styled.div`
    height: 380px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
    width: 8px;
    
    }
    
    ::-webkit-scrollbar-thumb {
        background: #848484; 
        border-radius: 9px;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #E4E4E4; 
    }
`;

export const P = styled.p`
    text-align: left;
    font: normal normal normal 14px/19px Roboto;
    color: #848484;
    opacity: 1;
    padding-top: 20px;
`;