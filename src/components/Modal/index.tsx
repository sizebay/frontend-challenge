import { AddNewTaskInput } from "../AddNewTaskInput";
import { Header } from "../Header";
import { ModalContainer } from "./styles";

export function Modal() {
    return (
        <ModalContainer>
            <Header />
            <AddNewTaskInput />
        </ModalContainer>
    );
}