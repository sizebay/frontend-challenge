import { AddNewTaskInput } from "../AddNewTaskInput";
import { Header } from "../Header";
import { TasksList } from "../TasksList";
import { ModalContainer } from "./styles";

export function Modal() {
    return (
        <ModalContainer>
            <Header />
            <AddNewTaskInput />
            <TasksList />
        </ModalContainer>
    );
}