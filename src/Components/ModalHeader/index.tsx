import { Header } from './ModalHeader'

export interface Props {
    children: React.ReactNode
}

function ModalHeader(props: Props) {

    return (
        <Header>
            {props.children}
        </Header>
    )
}

export default ModalHeader;