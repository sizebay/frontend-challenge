import React, { useEffect } from 'react';
import { Button } from '../Button/Button';
import { doneSelectTheme, doneTheme } from '../Button/Button.styles';
import { Check, MagnifyingGlass, X } from '@phosphor-icons/react';
import { FilterHeaderContainer, ButtonContainer, FilterContainer, InputContainer, Input } from './FilterHeader.styles';

interface Task {
    id: number;
    completed: boolean;
    taskText: string;
}

interface FilterHeaderProps {
    tasks: Task[];
    setFilteredTasks: (filteredTasks: Task[]) => void;
    changeFilterButtons: (buttonName: 'done' | 'pending') => void;
    filterInfos: {
        done: boolean;
        pending: boolean;
        filterText: string;
    };
    setFiltersState: (filtersInfo: {
        done: boolean;
        pending: boolean;
        filterText: string;
    }) => void;
}

export function FilterHeader({ tasks, setFilteredTasks, changeFilterButtons, filterInfos, setFiltersState }: FilterHeaderProps) {
    function filterTasks(): Task[] {
        return tasks.filter(task => {
            const isDone = filterInfos.done ? task.completed : true;
            const isPending = filterInfos.pending ? !task.completed : true;
            const searchText = filterInfos.filterText.toLowerCase();
            const taskText = task.taskText.toLowerCase();
            return isDone && isPending && taskText.includes(searchText);
        });
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFiltersState({ ...filterInfos, filterText: event.target.value });
    }

    function handleClearFilters() {
        setFiltersState({ done: false, pending: false, filterText: '' });
    }

    useEffect(() => {
        const filteredTasks = filterTasks();
        setFilteredTasks(filteredTasks);
    }, [filterInfos]);

    return (
        <FilterHeaderContainer>
            <FilterContainer>
                <ButtonContainer data-cy="buttonContainer">
                    <Button
                        theme={filterInfos.done ? doneSelectTheme : doneTheme}
                        onButtonClick={() => changeFilterButtons('done')}>
                        {filterInfos.done ? <Check /> : null} Done
                    </Button>
                    <Button
                        theme={filterInfos.pending ? doneSelectTheme : doneTheme}
                        onButtonClick={() => changeFilterButtons('pending')}>
                        {filterInfos.pending ? <Check /> : null} Pending
                    </Button>
                </ButtonContainer>
                <InputContainer>
                    <Input
                        data-cy="searchTaskInput"
                        type="text"
                        placeholder="Search items"
                        value={filterInfos.filterText}
                        onChange={handleInputChange}
                    />
                    {(!filterInfos.done && !filterInfos.pending && filterInfos.filterText === "") ?
                        <MagnifyingGlass size={17.49} weight="bold" style={{ position: 'absolute', right: '13.51px', top: '50%', transform: 'translateY(-50%)' }} /> :
                        <X data-cy="clearFiltersIcon" onClick={handleClearFilters} size={17.49} weight="bold" style={{ position: 'absolute', right: '13.51px', top: '50%', transform: 'translateY(-50%)' }} />
                    }
                </InputContainer>
            </FilterContainer>
        </FilterHeaderContainer>
    );
}
