
import { AddNewTodoInput } from '../AddNewTodoInput';
import { FilterTodos } from '../FilterTodos';
import { Header } from '../Header';
import { TodoList } from '../TodoList';
import { ModalContainer } from './styles';


export function Modal() {

    return (
        <ModalContainer>
            <Header />
            <FilterTodos />
            <AddNewTodoInput />
            <TodoList />
        </ModalContainer>
    );
}