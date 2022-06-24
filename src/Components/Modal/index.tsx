
import { AddNewTodoInput } from '../AddNewTodoInput';
import { Header } from '../Header';
import { TodoList } from '../TodoList';
import { ModalContainer } from './styles';


export function Modal() {

    return (
        <ModalContainer>
            <Header />
            <AddNewTodoInput />
            <TodoList />
        </ModalContainer>
    );
}