import { CheckCircle, MinusCircle } from 'phosphor-react';
import { useState } from 'react';
import { useAllTodos } from '../../Contexts/AllTodos';
import { theme } from '../../GlobaStyles/theme';
import { ActionButtons, CompleteButton, DeleteButton, EditControls, EditInput, TodoContainer, TodoText } from './styles';

interface TodoItemType {
    id: number,
    completed: boolean,
    text: string,
}

export function TodoItem({ id, completed, text }: TodoItemType) {

    const { todos, setTodos } = useAllTodos()
    const [todoEditing, setTodoEditing] = useState<null | number>(null);
    const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);
    const [editingText, setEditingText] = useState("");

    function deleteTodo(id: number) {
        let updatedTodos = [...todos].filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }

    function toggleComplete(id: number) {
        let updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    function submitEdits(id: number) {
        const updatedTodos = [...todos].map((todo) => {
            if (id === todo.id) {
                todo.text = editingText;
            }
            return todo;
        });
        setTodos(updatedTodos);
        setTodoEditing(null);
        setIsEditModeEnabled(false);
    }

    return (
        <TodoContainer completed={completed}>
            {id === todoEditing ? (
                <EditInput
                    type="text"
                    onChange={(e) => setEditingText(e.target.value)}
                />
            ) : (
                <TodoText onClick={() => { setIsEditModeEnabled(!isEditModeEnabled) }}>{text}</TodoText>
            )}

            {isEditModeEnabled ?
                <ActionButtons>
                    <DeleteButton onClick={() => deleteTodo(id)}>
                        <MinusCircle size={30} weight={'fill'} color={theme.colors.white} />
                    </DeleteButton>

                    <CompleteButton
                        type="checkbox"
                        id="completed"
                        checked={completed}
                        onChange={() => toggleComplete(id)}
                    />
                    <i><CheckCircle size={30} weight={'fill'} color={theme.colors.white} /></i>
                </ActionButtons> : null}

            {isEditModeEnabled ?
                <EditControls>
                    {id === todoEditing ? (
                        <button onClick={() => submitEdits(id)}>Submit Edits</button>
                    ) : (
                        <button onClick={() => setTodoEditing(id)}>Edit</button>
                    )}
                </EditControls>
                : null
            }

        </TodoContainer>
    )
}