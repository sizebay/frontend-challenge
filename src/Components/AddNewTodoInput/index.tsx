import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import { useAllTodos } from "../../Contexts/AllTodos";
import { theme } from "../../GlobaStyles/theme";
import { InputContainer } from "./styles";

export function AddNewTodoInput() {

    const { todos, setAllTodos } = useAllTodos()

    const [todo, setTodo] = useState("");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false,
        };
        setAllTodos([newTodo, ...todos])
        setTodo("");
    }

    return (
        <InputContainer onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
                placeholder="Add new item..."
            />
            <button
                type="submit"
                disabled={todo.length === 0}
            >
                <PlusCircle size={26} weight={'fill'} color={theme.colors.white} />
            </button>
        </InputContainer>
    )
}