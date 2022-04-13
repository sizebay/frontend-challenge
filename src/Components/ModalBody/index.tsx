import { StyleModalBody } from './ModalBody'

export interface Props {
    children: React.ReactNode
}

function ModalBody(props: Props) {

    return (
        <StyleModalBody>
            {props.children}
        </StyleModalBody>
    )
}

export default ModalBody;