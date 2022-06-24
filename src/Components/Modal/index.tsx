
import { AddNewTodoInput } from '../AddNewTodoInput';
import { FilterTodos } from '../FilterTodos';
import { Header } from '../Header';
import { ProgressBar } from '../ProgressBar';
import { TodoList } from '../TodoList';
import { ModalContainer } from './styles';


export function Modal() {

    return (
        <ModalContainer>
            <Header />
            <ProgressBar />
            <FilterTodos />
            <AddNewTodoInput />
            <TodoList />
        </ModalContainer>
    );
}