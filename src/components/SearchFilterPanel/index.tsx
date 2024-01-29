import React from "react";
import { ButtonsContainer, ContainerControls } from "./style";
import SearchBar from "../SearchBar";
import { FaCheck } from "react-icons/fa";
import ButtonStatus from "../ButtonStatus";


interface SearchFilterPanelProps {
  addItem: (taskName: string) => void;
  selectedButton: string | null;
  setSelectedButton: React.Dispatch<React.SetStateAction<string | null>>;
}

function SearchFilterPanel({
  addItem,
  selectedButton,
  setSelectedButton,
}: SearchFilterPanelProps) {
  const handleButtonClick = (button: string) => {
    setSelectedButton((prevSelectedButton) =>
      prevSelectedButton === button ? null : button
    );
  };

  const handleAddTask = (taskName: string) => {
    addItem(taskName);
  };

  return (
    <ContainerControls>
      <ButtonsContainer>
        <ButtonStatus
          isSelected={selectedButton === "done"}
          onClick={() => handleButtonClick("done")}
          icon={<FaCheck />}
          label="Done"
        />
        <ButtonStatus
          isSelected={selectedButton === "pending"}
          onClick={() => handleButtonClick("pending")}
          icon={<FaCheck />}
          label="Pending"
        />
      </ButtonsContainer>
      <SearchBar onAddItemClick={handleAddTask} />
    </ContainerControls>
  );
}

export default SearchFilterPanel;