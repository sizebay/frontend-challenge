import React from "react";
import { ButtonsContainer, ContainerControls } from "./style";
import SearchBar from "../SearchBar";
import { FaCheck } from "react-icons/fa";
import ButtonStatus from "../ButtonStatus";

interface SearchFilterPanelProps {
  addItem: (taskName: string) => void;
  onSearch: (searchTerm: string) => void;
  selectedButton: string | null;
  setSelectedButton: React.Dispatch<React.SetStateAction<string | null>>;
}

function SearchFilterPanel({
  selectedButton,
  setSelectedButton,
  onSearch,
}: SearchFilterPanelProps) {
  const handleButtonClick = (button: string) => {
    setSelectedButton((prevSelectedButton) =>
      prevSelectedButton === button ? null : button
    );
  };

  const handleSearch = (searchTerm: string) => {
    onSearch(searchTerm);
  };

  return (
    <ContainerControls>
      <ButtonsContainer>
        <ButtonStatus
          isSelected={selectedButton === "done"}
          onClick={() => handleButtonClick("done")}
          icon={<FaCheck />}
          label="Done"
          data-testid="done-button"
        />
        <ButtonStatus
          isSelected={selectedButton === "pending"}
          onClick={() => handleButtonClick("pending")}
          icon={<FaCheck />}
          label="Pending"
          data-testid="pending-button"
        />
      </ButtonsContainer>
      <SearchBar onSearch={handleSearch} />
    </ContainerControls>
  );
}

export default SearchFilterPanel;