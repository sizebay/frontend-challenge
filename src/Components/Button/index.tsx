import { StyledButton, Icon } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export interface Props {
    isActive?: boolean;
    children: React.ReactNode;
    dataCy?: string;
    onClick?: () => void | undefined;
}

function Button(props: Props) {

    const handleClick = () => {
        if (props.onClick) props.onClick();
    }

    return (
        <StyledButton onClick={() => handleClick()} isActive={props.isActive ?? false} data-cy={props.dataCy} >
            {props.isActive && <Icon><FontAwesomeIcon icon={faCheck}/></Icon>}
            {props.children}
        </StyledButton>
    )
}

export default Button;