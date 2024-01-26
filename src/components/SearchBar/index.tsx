import React from 'react';
import { IconSearch } from '../TaskStatusControls/style';
import { ButtonSearch, Input, SearchContainer } from './style';

interface SearchBarProps {
  onAddItemClick: (taskName: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onAddItemClick }) => {
  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search items..."
      />
      <ButtonSearch>
        <IconSearch />
      </ButtonSearch>
    </SearchContainer>
  );
};

export default SearchBar;