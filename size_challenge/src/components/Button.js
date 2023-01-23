import { StatusButton } from '../styles'
import { BsCheck2 } from 'react-icons/bs';

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