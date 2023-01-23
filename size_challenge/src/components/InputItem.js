import { InputButton } from '../styles'
import { BsFillPlusCircleFill } from 'react-icons/bs';

function InputItem(){
    return(
        <>
        <InputButton>
            <input placeholder='Add new item...'>
            </input>
            <button>
                <BsFillPlusCircleFill color='#FFFFFF'  opacity={0.5} />
            </button>
    </InputButton>
    </>
    )
}

export default InputItem