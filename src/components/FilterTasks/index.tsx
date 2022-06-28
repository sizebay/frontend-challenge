import { MagnifyingGlass } from 'phosphor-react';
import { FormEvent, useEffect, useState } from 'react';
import { useTasks } from '../../contexts/TasksContext';
import { theme } from '../../globalStyles/theme';
import { FilterButton, FilterButtonsContainer, FilterContainer, FilterInput, InputContainer, SearchButton } from './styles';

export function FilterTasks() {

    const { handleSetActiveFilters, allTasks, setActiveFilter } = useTasks()
    const [searchTerm, setSearchTerm] = useState('')
    const [filterTag, setFilterTag] = useState('all')

    function searchByTerm(e: FormEvent) {
        e.preventDefault()
        setActiveFilter(allTasks.filter(task => task.title.includes(searchTerm.toLowerCase())))
        setSearchTerm('')
    }

    useEffect(() => {
        handleSetActiveFilters(filterTag)
    }, [filterTag])

    return (
        <FilterContainer>
            <FilterButtonsContainer>
                <FilterButton
                    value="done"
                    active={filterTag === 'done'}
                    onClick={(e) => (
                        setFilterTag(filterTag !== (e.target as HTMLButtonElement).value ? (e.target as HTMLButtonElement).value : 'all')
                    )}
                >
                    Done
                </FilterButton>
                <FilterButton
                    value="pending"
                    active={filterTag === 'pending'}
                    onClick={(e) => (
                        setFilterTag(filterTag !== (e.target as HTMLButtonElement).value ? (e.target as HTMLButtonElement).value : 'all')
                    )}
                >
                    Pending
                </FilterButton>
            </FilterButtonsContainer>

            <InputContainer onSubmit={(e) => searchByTerm(e)}>
                <FilterInput
                    type="text"
                    placeholder="Search items"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SearchButton>
                    <MagnifyingGlass size={20} weight='bold' color={theme.colors.gray500} />
                </SearchButton>
            </InputContainer>
        </FilterContainer>
    );
}