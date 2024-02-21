import { Button } from '../Button/Button';
import { doneSelectTheme, doneTheme } from '../Button/Button.styles';
import { Check, MagnifyingGlass, X } from '@phosphor-icons/react';
import { FilterHeaderContainer, ButtonContainer, FilterContainer, InputContainer, Input } from './FilterHeader.styles';
import { FilterType, useTaskContext } from '../../context/TaskContext';

export function FilterHeader() {
    const { filtersState, setFiltersState } = useTaskContext();

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFiltersState({ ...filtersState, filterText: event.target.value });
    }

    function handleClearFilters() {
        setFiltersState({ activeFilter: FilterType.None, filterText: '' });
    }

    function changeFilterButtons(filterType: FilterType) {
        if (filtersState.activeFilter === filterType) {
            setFiltersState({ ...filtersState, activeFilter: FilterType.None });
        } else {
            setFiltersState({ ...filtersState, activeFilter: filterType });
        }
    }
    
    return (
        <FilterHeaderContainer>
            <FilterContainer>
                <ButtonContainer data-cy="buttonContainer">
                    <Button
                        theme={filtersState.activeFilter === FilterType.Done ? doneSelectTheme : doneTheme}
                        onButtonClick={() => changeFilterButtons(FilterType.Done)}>
                        {filtersState.activeFilter === FilterType.Done ? <Check /> : null} Done
                    </Button>
                    <Button
                        theme={filtersState.activeFilter === FilterType.Pending ? doneSelectTheme : doneTheme}
                        onButtonClick={() => changeFilterButtons(FilterType.Pending)}>
                        {filtersState.activeFilter === FilterType.Pending ? <Check /> : null} Pending
                    </Button>
                </ButtonContainer>
                <InputContainer>
                    <Input
                        data-cy="searchTaskInput"
                        type="text"
                        placeholder="Search items"
                        value={filtersState.filterText}
                        onChange={handleInputChange}
                    />
                    {(filtersState.activeFilter == 'none' && !filtersState.filterText) ?
                        <MagnifyingGlass size={17.49} weight="bold" style={{ position: 'absolute', right: '13.51px', top: '50%', transform: 'translateY(-50%)' }} /> :
                        <X data-cy="clearFiltersIcon" onClick={handleClearFilters} size={17.49} weight="bold" style={{ position: 'absolute', right: '13.51px', top: '50%', transform: 'translateY(-50%)' }} />
                    }
                </InputContainer>
            </FilterContainer>
        </FilterHeaderContainer>
    );
}
