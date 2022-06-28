import { AddNewTaskInput } from "../AddNewTaskInput";
import { FilterTasks } from "../FilterTasks";
import { Header } from "../Header";
import { Progressbar } from "../Progressbar";
import { TasksList } from "../TasksList";
import { ModalContainer } from "./styles";

export function Modal() {
    return (
        <ModalContainer>
            <Header />
            <Progressbar />
            <FilterTasks />
            <AddNewTaskInput />
            <TasksList />
        </ModalContainer>
    );
}