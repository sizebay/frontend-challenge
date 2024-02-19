import { useEffect, useState } from 'react';
import { PlusCircle } from "@phosphor-icons/react";
import { Button, ButtonProps } from "../Button/Button";
import { addTheme, deleteTheme, saveTheme } from "../Button/Button.styles";
import { NewTaskContainer, InputContainer } from "./NewTask.styles";

interface NewTaskProps {
    addNewTask: (taskText: string) => void;
    isFilterActive?: boolean;
}

export function NewTask({ addNewTask, isFilterActive }: NewTaskProps) {
    const [inputValue, setInputValue] = useState('');
    const [buttonTheme, setButtonTheme] = useState<ButtonProps>({ theme: addTheme });

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    function handleAddTask() {
        if (inputValue.trim() !== '' && !isFilterActive) {
            addNewTask(inputValue);
            setInputValue('');
            setButtonTheme({ theme: saveTheme });
            setTimeout(() => {
                setButtonTheme({ theme: addTheme });
            }, 1000);
        } else {
            setButtonTheme({ theme: { ...deleteTheme, radius: '0px 4px 4px 0px' } });
            setTimeout(() => {
                setButtonTheme({ theme: addTheme });
            }, 1000);
        }
    }

    useEffect(() => {
        if (isFilterActive) {
            setInputValue('');
            setButtonTheme({ theme: addTheme });
        }
    }, [isFilterActive]);

    return (
        <NewTaskContainer>
            <InputContainer>
                <input
                    data-cy="newItemInput"
                    type="text"
                    placeholder="Add new item..."
                    value={inputValue}
                    onChange={handleInputChange}
                    disabled={isFilterActive}
                />
                <Button
                    data-cy="addNewItemButton"
                    onButtonClick={handleAddTask}
                    theme={buttonTheme.theme} // Acesso direto ao atributo theme
                    disabled={isFilterActive}
                >
                    <PlusCircle size={25} weight="fill" />
                </Button>
            </InputContainer>
        </NewTaskContainer>
    )
}