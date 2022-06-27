import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import { Input, InputContainer, SubmitButton } from "./styles";

export function AddNewTaskInput() {

    const [newItem, setNewItem] = useState('')

    return (
        <InputContainer>
            <Input
                type="text"
                name="add new task"
                placeholder="Add new item..."
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <SubmitButton
                disabled={!newItem}
            >
                <PlusCircle size={26} weight='fill' color='white' />
            </SubmitButton>
        </InputContainer>
    );
}