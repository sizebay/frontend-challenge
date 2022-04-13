import { ChangeEvent, useState, useEffect, useRef } from 'react';
import { Input } from './TaskItemInput';

export interface Props {
    value: string;
    dataCy?: string;
    placeholder?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onEscape: () => void;
}

function TaskItemInput(props: Props) {

    const [value, setValue] = useState(props.value);
    const ref = useRef<any>(null);

    useEffect(() => {
        const onEscape = (event: KeyboardEvent) => {
            event.stopPropagation();
            if (event.key !== "Escape") return; 
            setValue(props.value);
            props.onEscape();
        }

        setValue(props.value);

        document.addEventListener("keydown", onEscape, false);
        return () => document.removeEventListener("keydown", onEscape, false);
    }, [props])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        props.onChange(event);
    }

    return (
        <Input
            placeholder={props.placeholder ?? ''}
            name="taskItemInput"
            type="text"
            value={value}
            onChange={(e) => handleChange(e)}
            data-cy={props.dataCy}
        />
    )
}

export default TaskItemInput;