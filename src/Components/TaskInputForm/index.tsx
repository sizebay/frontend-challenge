import { FormEvent } from 'react';
import { Form } from './TaskInputForm';

export interface Props {
    onSubmit?: (event: FormEvent) => void
    onReset: () => void
    children: React.ReactNode
}

function TaskInputForm(props: Props) {

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if(props.onSubmit) props.onSubmit(event);
    }

    return (
        <Form
            onSubmit={(e) => handleSubmit(e)}
            onReset={() => props.onReset()}
            autoComplete="off"
        >
            { props.children }
        </Form>
    )
}

export default TaskInputForm;