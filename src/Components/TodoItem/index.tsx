import { CheckCircle, MinusCircle } from 'phosphor-react';
import { useState } from 'react';
import { useAllTodos } from '../../Contexts/AllTodos';
import { theme } from '../../GlobaStyles/theme';
import { ActionButtons, CompleteButton, DeleteButton, EditControls, EditInput, TodoContainer, TodoText } from './styles';

interface TodoItemType {
    todoId: number,
    isTodoCompleted: boolean,
    todoText: string,
}

export function TodoItem({ todoId, isTodoCompleted, todoText }: TodoItemType) {

    const { todos, setTodos, setAllTodos } = useAllTodos()
    const [todoEditing, setTodoEditing] = useState<null | number>(null);
    const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);
    const [editingText, setEditingText] = useState("");

    function deleteTodo(id: number) {
        let updatedTodos = [...todos].filter((todo) => todo.id !== id);
        setAllTodos(updatedTodos);
        setIsEditModeEnabled(false);
    }

    function toggleComplete(id: number) {
        let updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updatedTodos);
        setIsEditModeEnabled(false);
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
        <TodoContainer completed={isTodoCompleted}>
            {todoId === todoEditing ? (
                <EditInput
                    type="text"
                    onChange={(e) => setEditingText(e.target.value)}
                />
            ) : (
                <TodoText onClick={() => { setIsEditModeEnabled(!isEditModeEnabled) }}>{todoText}</TodoText>
            )}

            {isEditModeEnabled ?
                <ActionButtons>
                    <DeleteButton onClick={() => deleteTodo(todoId)}>
                        <MinusCircle size={30} weight={'fill'} color={theme.colors.white} />
                    </DeleteButton>

                    <CompleteButton
                        type="checkbox"
                        id="completed"
                        checked={isTodoCompleted}
                        onChange={() => toggleComplete(todoId)}
                    />
                    <i><CheckCircle size={30} weight={'fill'} color={theme.colors.white} /></i>
                </ActionButtons> : null}

            {isEditModeEnabled ?
                <EditControls>
                    {todoId === todoEditing ? (
                        <button onClick={() => submitEdits(todoId)}>Submit Edits</button>
                    ) : (
                        <button onClick={() => setTodoEditing(todoId)}>Edit</button>
                    )}
                </EditControls>
                : null
            }

        </TodoContainer>
    )
}