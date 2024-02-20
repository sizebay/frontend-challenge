import { Button } from '../Button/Button';
import { doneSelectTheme, doneTheme } from '../Button/Button.styles';
import { Check, MagnifyingGlass, X } from '@phosphor-icons/react';
import { FilterHeaderContainer, ButtonContainer, FilterContainer, InputContainer, Input } from './FilterHeader.styles';
import { FilterProps, FilterType } from '../Modal/Modal';

interface FilterHeaderProps {
    changeFilterButtons: (filterType: FilterType) => void;
    filterInfos: FilterProps;
    setFiltersState: (filtersInfo: FilterProps) => void;
}

export function FilterHeader({ changeFilterButtons, filterInfos, setFiltersState }: FilterHeaderProps) {
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFiltersState({ ...filterInfos, filterText: event.target.value });
    }

    function handleClearFilters() {
        setFiltersState({ activeFilter: FilterType.None, filterText: '' });
    }

    return (
        <FilterHeaderContainer>
            <FilterContainer>
                <ButtonContainer data-cy="buttonContainer">
                    <Button
                        theme={filterInfos.activeFilter === FilterType.Done ? doneSelectTheme : doneTheme}
                        onButtonClick={() => changeFilterButtons(FilterType.Done)}>
                        {filterInfos.activeFilter === FilterType.Done ? <Check /> : null} Done
                    </Button>
                    <Button
                        theme={filterInfos.activeFilter === FilterType.Pending ? doneSelectTheme : doneTheme}
                        onButtonClick={() => changeFilterButtons(FilterType.Pending)}>
                        {filterInfos.activeFilter === FilterType.Pending ? <Check /> : null} Pending
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
                    {(!filterInfos.activeFilter && !filterInfos.filterText) ?
                        <MagnifyingGlass size={17.49} weight="bold" style={{ position: 'absolute', right: '13.51px', top: '50%', transform: 'translateY(-50%)' }} /> :
                        <X data-cy="clearFiltersIcon" onClick={handleClearFilters} size={17.49} weight="bold" style={{ position: 'absolute', right: '13.51px', top: '50%', transform: 'translateY(-50%)' }} />
                    }
                </InputContainer>
            </FilterContainer>
        </FilterHeaderContainer>
    );
}
