import { useContext } from 'react';
import { TaskContext } from '../../Context/TaskContext';
import { InputContainer, Input, IconWrapper } from './SearchInput';
import { faSearch, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchInput() {

    const { search, setSearch } = useContext(TaskContext);

    const filterTasks = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setSearch(value);
    }

    const clearSearch = () => {
        setSearch("");
    }

    return(
        <InputContainer>
            <Input name="sarchInput" 
                placeholder="Search items" 
                onChange={(e) => filterTasks(e)} 
                value={search}
                autoComplete="off"
                data-cy="search-items-input"
            />
            <IconWrapper>
                {!search && <FontAwesomeIcon icon={faSearch}/>}
                {search && <FontAwesomeIcon icon={faX} onClick={() => clearSearch()}/>}
            </IconWrapper>
        </InputContainer>
    )
}

export default SearchInput;