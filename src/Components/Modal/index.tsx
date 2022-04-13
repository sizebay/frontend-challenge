import { ModalContainer } from "./Modal";

export interface Props {
    children: React.ReactNode;
}

function Modal(props: Props) {

    return(
        <ModalContainer>
            {props.children}
        </ModalContainer>
    )
}

export default Modal;