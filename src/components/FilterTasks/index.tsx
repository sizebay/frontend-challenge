import { MagnifyingGlass } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { theme } from '../../globalStyles/theme';
import { FilterButton, FilterButtonsContainer, FilterContainer, FilterInput, InputContainer, SearchButton } from './styles';

export function FilterTasks() {

    const [searchTerm, setSearchTerm] = useState('')
    const [filterTag, setFilterTag] = useState<'done' | 'pending' | 'all'>('done')

    function searchByTerm(e: FormEvent) {
        e.preventDefault()
        console.log(searchTerm)
        setSearchTerm('')
    }

    return (
        <FilterContainer>
            <FilterButtonsContainer>
                <FilterButton
                    value="done"
                    active={filterTag === 'done'}
                    onClick={() => setFilterTag(filterTag === 'done' ? 'all' : 'done')}
                >
                    Done
                </FilterButton>
                <FilterButton
                    value="pending"
                    active={filterTag === 'pending'}
                    onClick={() => setFilterTag(filterTag === 'pending' ? 'all' : 'pending')}
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