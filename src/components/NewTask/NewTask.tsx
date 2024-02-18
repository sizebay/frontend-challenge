import { useEffect, useState } from 'react';
import { PlusCircle } from "@phosphor-icons/react";
import { Button } from "../Button/Button";
import { addTheme } from "../Button/Button.styles";
import { NewTaskContainer, InputContainer } from "./NewTask.styles";

interface NewTaskProps {
    addNewTask: (taskText: string) => void;
    isFilterActive?: boolean;
}

export function NewTask({ addNewTask, isFilterActive }: NewTaskProps) {
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    function handleAddTask() {
        if (inputValue.trim() !== '' && !isFilterActive) {
            addNewTask(inputValue);
            setInputValue('');
        }
    }

    useEffect(() => {
        if (isFilterActive) {
            setInputValue('');
        }
    }, [isFilterActive]);

    return (
        <NewTaskContainer>
            <InputContainer>
                <input
                    type="text"
                    placeholder="Add new item..."
                    value={inputValue}
                    onChange={handleInputChange}
                    disabled={isFilterActive}
                />
                <Button
                    onButtonClick={handleAddTask}
                    theme={addTheme}
                    disabled={isFilterActive}
                >
                    <PlusCircle size={25} weight="fill" />
                </Button>
            </InputContainer>
        </NewTaskContainer>
    )
}