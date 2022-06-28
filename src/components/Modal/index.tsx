import { AddNewTaskInput } from "../AddNewTaskInput";
import { FilterTasks } from "../FilterTasks";
import { Header } from "../Header";
import { TasksList } from "../TasksList";
import { ModalContainer } from "./styles";

export function Modal() {
    return (
        <ModalContainer>
            <Header />
            <FilterTasks />
            <AddNewTaskInput />
            <TasksList />
        </ModalContainer>
    );
}