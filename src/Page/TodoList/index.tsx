import DateHeader from '../../Components/DateHeader';
import FilterTab from '../../Components/FilterTab';
import Modal from '../../Components/Modal'
import ModalBody from '../../Components/ModalBody'
import ModalHeader from '../../Components/ModalHeader'
import ProgressBar from '../../Components/ProgressBar'
import TaskList from '../../Components/TaskList';

function TodoListPage() {
    return (
        <Modal>
            <ModalHeader>
                <DateHeader />
                <ProgressBar />
            </ModalHeader>
            <ModalBody>
                <FilterTab />
                <TaskList />
            </ModalBody>
        </Modal>
    )
}

export default TodoListPage;