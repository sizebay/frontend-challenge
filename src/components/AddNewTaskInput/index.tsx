import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import { useTasks } from "../../contexts/TasksContext";
import { Input, InputContainer, SubmitButton } from "./styles";

export function AddNewTaskInput() {

    const { createNewTask, completedTasks, pendingTasks } = useTasks()
    const [newItem, setNewItem] = useState('')

    function addNewTask(e: FormEvent) {
        e.preventDefault()
        createNewTask(newItem)
        setNewItem('')
    }

    return (
        <InputContainer onSubmit={(e) => addNewTask(e)}>
            <Input
                type="text"
                name="add new task"
                placeholder="Add new item..."
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <SubmitButton
                disabled={!newItem}
                type="submit"
            >
                <PlusCircle size={26} weight='fill' color='white' />
            </SubmitButton>
        </InputContainer>
    );
}