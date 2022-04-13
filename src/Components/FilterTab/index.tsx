import { useContext } from 'react';
import Button from '../Button'
import SearchInput from '../SearchInput'
import { ButtonWrapper, FilterTabContainer } from './FilterTab';
import { TaskContext } from '../../Context/TaskContext';

function FilterTab() {

    const { percentage, currentStatus, setCurrentStatus } = useContext(TaskContext);

    const handleFilter = (status: string) => {
        if(status === currentStatus) {
            setCurrentStatus('');
        } else {
            setCurrentStatus(status);
        }
    }

    return (    
        <FilterTabContainer justify={percentage < 100 ? 'space-between' : 'flex-end'}>
            <ButtonWrapper show={percentage < 100} >
                <Button onClick={() => handleFilter('done')} isActive={currentStatus === 'done'} dataCy="filter-done">Done</Button>
                <Button onClick={() => handleFilter('pending')} isActive={currentStatus === 'pending'} dataCy="filter-pending">Pending</Button>
            </ButtonWrapper>
            <SearchInput/>
        </FilterTabContainer>
    )
}

export default FilterTab;