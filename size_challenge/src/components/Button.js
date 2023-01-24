import { BsCheck2 } from 'react-icons/bs';
import styled from 'styled-components';

const StatusButton = styled.button`
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

function Button(props){
    return(
     <StatusButton active={props.active} onClick={props.event}>
        { props.active ? <BsCheck2 color='#4DA6B3'>
        </BsCheck2> : null}
        <label>{props.label}</label>
    </StatusButton>   
    )
}

export default Button