import { ReactNode, useState, useEffect, useRef } from "react";
import { Container } from './TaskItemContainer'

export interface Props {
    isEditing: boolean;
    children: ReactNode;
    dataCy?: string;
    onClick: () => void;
    onClickOutside: () => void;
}

function TaskItemContainer(props: Props) {

    const [isEditing, setIsEditing] = useState(props.isEditing);
    const ref = useRef<any>(null);

    useEffect(() => {
        function handleClickOutside(event: Event) {
            if(ref.current && !ref.current.contains(event.target as Node)) {
                setIsEditing(false);
                props.onClickOutside();
            }
        }

        setIsEditing(props.isEditing);

        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        }
    }, [props] )

    function startEditing() {
        setIsEditing(true);
        props.onClick();
    }

    return (
        <Container ref={ref} isEditing={isEditing} onClick={() => startEditing()} data-cy={props.dataCy}>
            {props.children}
        </Container>
    )
}

export default TaskItemContainer;