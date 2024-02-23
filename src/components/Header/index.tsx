import { ProgressBar } from '../ProgressBar'
import { StatusButton } from '../StatusButton'
import { format } from 'date-fns'

import { HeaderContainer, StatusFilterContainer, DateHeaderWrapper, DateContainer, WeekDay, SearchButton, SearchContainer, SearchIcon, SearchInput, CancelIcon } from './styles'
import { useRef, useState } from 'react'

interface HeaderProps {
  completedItemsCount: number;
  tasksCount: number;
  selectedButton: string | null;
  isSearchActive: boolean;
  handleSearchChange: (isActive: boolean) => void;
  handleAddChange: (isActive: boolean) => void;
  onSearch: (searchTerm: string) => void;
  setSelectedButton: React.Dispatch<React.SetStateAction<string | null>>;
}

export function Header({
  completedItemsCount, 
  tasksCount, 
  isSearchActive, 
  selectedButton,
  onSearch,  
  handleSearchChange, 
  handleAddChange, 
  setSelectedButton
}: HeaderProps) {

  const date = new Date()
  const weekDay = format(date, "EEEE")
  const day = format(date, "dd")
  const month = format(date, "MMM")
  const year = format(date, "yyyy")

  const searchInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value
    onSearch(newSearchTerm)
    handleSearchChange(newSearchTerm !== "")
    handleAddChange(false)
  }

  const handleButtonClick = (button: string) => {
    setSelectedButton((prevSelectedButton) =>
      prevSelectedButton === button ? null : button
    )
  }

  const handleCancelSearch = () => {
    if (searchInputRef.current !== null) {
      searchInputRef.current.value = ''
      onSearch(searchInputRef.current.value)
    }
    handleSearchChange(false)
  }

  return (
    <HeaderContainer>
      <DateHeaderWrapper>
        <DateContainer>
          <span className="day">{day}</span>
          <div className="monthAndYear">
            <span className="month">{month}</span>
            <span className="year">{year}</span>
          </div>
        </DateContainer>

        <WeekDay>{weekDay}</WeekDay>
      </DateHeaderWrapper>

      <ProgressBar completedItemsCount={completedItemsCount} tasksCount={tasksCount}/>
      
      <StatusFilterContainer>  
        <StatusButton label="Done" selected={selectedButton === "done"} onClick={() => handleButtonClick("done")} done={true}/>
        <StatusButton label="Pending" selected={selectedButton === "pending"} onClick={() => handleButtonClick("pending")} done={false}/> 
        
        <SearchContainer>
          <SearchInput
            ref={searchInputRef}
            type="text"
            placeholder="Search items"
            onChange={handleInputChange}
          />

          <SearchButton onClick={handleCancelSearch}>
          { isSearchActive ? 
            ( <CancelIcon /> ) : ( <SearchIcon /> ) }
          </SearchButton>
        </SearchContainer>
      </StatusFilterContainer>
    </HeaderContainer>
  )
}