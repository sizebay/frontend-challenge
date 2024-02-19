import { SearchButton, SearchIcon, SearchContainer, SearchInput } from './styles'

interface SearchItemsProps {
  onSearch: (searchKey: string) => void;
}

export function SearchItems({ onSearch }: SearchItemsProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    onSearch(newSearchTerm);
  }

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search items"
        onChange={handleInputChange}
      />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </SearchContainer>
  )
}