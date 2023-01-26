import { BsCheck2 } from 'react-icons/bs';
import { StatusButtonComponent} from '../styles';

function StatusButton(props){
    return(
     <StatusButtonComponent active={props.active} onClick={props.event}>
        { props.active ? <BsCheck2 color='#4DA6B3' size={12} /> : null }
        <label>{props.label}</label>
    </StatusButtonComponent>   
    )
}

export default StatusButton