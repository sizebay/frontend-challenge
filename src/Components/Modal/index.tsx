
import { AddNewTodoInput } from '../AddNewTodoInput';
import { Header } from '../Header';
import { ModalContainer } from './styles';

export function Modal() {

    return (
        <ModalContainer>
            <Header />
            <AddNewTodoInput />
        </ModalContainer>
    );
}