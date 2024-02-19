import { DateHeader } from '../DateHeader'
import { ProgressBar } from '../ProgressBar'
import { SearchItems } from '../SearchItems'
import { StatusButton } from '../StatusButton'
import { FaCheck } from 'react-icons/fa'

import { HeaderContainer, StatusFilterContainer } from './styles'

interface HeaderProps {
  completedItemsCount: number;
  tasksCount: number;
  onSearch: (searchTerm: string) => void;
  selectedButton: string | null;
  setSelectedButton: React.Dispatch<React.SetStateAction<string | null>>;
}

export function Header({completedItemsCount, tasksCount, onSearch, selectedButton, setSelectedButton}: HeaderProps) {
  const handleButtonClick = (button: string) => {
    setSelectedButton((prevSelectedButton) =>
      prevSelectedButton === button ? null : button
    );
  };

  const handleSearch = (searchTerm: string) => {
    onSearch(searchTerm);
  };

  return (
    <HeaderContainer>
      <DateHeader />
      <ProgressBar completedItemsCount={completedItemsCount} tasksCount={tasksCount}/>
      
      <StatusFilterContainer>  
        <StatusButton label="Done" selected={false} onClick={() => handleButtonClick("done")}/>
        <StatusButton label="Pending" selected={false} onClick={() => handleButtonClick("pending")}/> 
        <SearchItems onSearch={handleSearch}/>
      </StatusFilterContainer>
    </HeaderContainer>
  )
}