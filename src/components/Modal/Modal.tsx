import { Header } from '../Header/Header';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { ModalContent } from './Modal.styles';
import { FilterHeader } from '../Filter/FilterHeader';
import { NewTask } from '../NewTask/NewTask';
import { TaskList } from '../TaskList/TaskList';

export function Modal() {
    return (
        <ModalContent data-cy="modalContent">
            <Header />
            <ProgressBar />
            <FilterHeader />
            <NewTask />
            <TaskList />
        </ModalContent>
    );
}