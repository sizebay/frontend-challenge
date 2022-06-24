import { useAllTodos } from "../../Contexts/AllTodos";
import { TodoItem } from "../TodoItem";
import { DefaultText, TodoListContainer } from "./styles";

export function TodoList() {

    const { todos } = useAllTodos()

    return (
        <TodoListContainer>
            {todos.length > 0 ?
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        completed={todo.completed}
                        text={todo.text}
                    />
                )) :
                <DefaultText>
                    No items found, <u>click the button above to add one</u> or <u>clear the filters</u>.
                </DefaultText>
            }
        </TodoListContainer>
    );
}