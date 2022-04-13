import { useEffect, useState } from "react";
import { ActionButtonContainer, Icon } from './ActionButton';
import { faCircleCheck, faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export interface Props {
    variant: string;
    enabled?: boolean;
    dataCy?: string;
    onClick: () => void;
}

function ActionButton(props: Props) {

    let [variant] = useState(props.variant);
    let [enabled, setEnabled] = useState(props.enabled ?? true);

    useEffect(() => {
        setEnabled(props.enabled ?? true);
    }, [props.enabled]);

    const handleClick = () => {
        if (!enabled) return;
        props.onClick();
    }

    return (
        <ActionButtonContainer variant={variant} enabled={enabled} onClick={() => handleClick()} data-cy={props.dataCy}>
            {variant === 'save' && <Icon icon={faCircleCheck} size={"2x"}/>}
            {variant === 'delete' && <Icon icon={faCircleMinus} size="2x"/>}
            {variant === 'create' && <Icon icon={faCirclePlus} size="2x"/>}
        </ActionButtonContainer>
    )
}

export default ActionButton;