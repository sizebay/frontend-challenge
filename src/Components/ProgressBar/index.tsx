import { useContext } from 'react';
import { TaskContext } from "../../Context/TaskContext";
import { ProgressBarContainer, ProgressBarContainerInner, Gif } from "./ProgressBar";

export interface Props {
    value?: number
}

function ProgressBar(props: Props) {

    const { percentage } = useContext(TaskContext);  

    return( 
        <ProgressBarContainer>
            <Gif src="./img/confetti.gif" alt="party popper" show={percentage === 100} data-cy="progress-gif"/>
            <ProgressBarContainerInner percentage={props.value ?? percentage} data-cy="progress-bar" />
        </ProgressBarContainer>
    )
}

export default ProgressBar;