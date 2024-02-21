import { useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';
import { Button, ButtonProps } from '../Button/Button';
import { addTheme, deleteTheme, saveTheme } from '../Button/Button.styles';
import { NewTaskContainer, InputContainer } from './NewTask.styles';
import { toast } from 'react-toastify';
import { useTaskContext } from '../../context/TaskContext';

export function NewTask() {
    const { addTask } = useTaskContext();

    const [inputValue, setInputValue] = useState('');
    const [buttonTheme, setButtonTheme] = useState<ButtonProps>({ theme: addTheme });

    const createdTaskToast = () => toast.success('New task created!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const errorTaskToast = () => toast.error('Error! Please insert an task title.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    function handleAddTask() {
        if (inputValue.trim() !== '') {
            addTask(inputValue);
            setInputValue('');
            setButtonTheme({ theme: saveTheme });
            createdTaskToast();
            setTimeout(() => {
                setButtonTheme({ theme: addTheme });
            }, 1000);
        } else {
            errorTaskToast();
            setButtonTheme({ theme: { ...deleteTheme, radius: '0px 4px 4px 0px' } });
            setTimeout(() => {
                setButtonTheme({ theme: addTheme });
            }, 1000);
        }
    }

    return (
        <NewTaskContainer>
            <InputContainer>
                <input
                    data-cy="newItemInput"
                    type="text"
                    placeholder="Add new item..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <Button
                    data-cy="addNewItemButton"
                    onButtonClick={handleAddTask}
                    theme={buttonTheme.theme} // Acesso direto ao atributo theme
                >
                    <PlusCircle size={25} weight="fill" />
                </Button>
            </InputContainer>
        </NewTaskContainer>
    );
}
