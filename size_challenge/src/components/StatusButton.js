import { BsCheck2 } from 'react-icons/bs';
import styled from 'styled-components';
import { Button} from '../styles';

const StatusButtonComponent = styled(Button)`
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

function StatusButton(props){
    return(
     <StatusButtonComponent active={props.active} onClick={props.event}>
        { props.active ? <BsCheck2 color='#4DA6B3' size={12} /> : null }
        <label>{props.label}</label>
    </StatusButtonComponent>   
    )
}

export default StatusButton