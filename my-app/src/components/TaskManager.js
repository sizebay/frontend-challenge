import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { FaSearch, FaCheck } from "react-icons/fa";
import styled from "styled-components";
import "./TaskManager.css";

const SearchContainer = styled.div`
  position: relative;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 75px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const useTaskManager = () => {
  const [doneSelected, setDoneSelected] = useState(false);
  const [pendingSelected, setPendingSelected] = useState(false);

  const handleDoneClick = () => {
    setDoneSelected(!doneSelected);
    setPendingSelected(false);
  };

  const handlePendingClick = () => {
    setPendingSelected(!pendingSelected);
    setDoneSelected(false);
  };

  const handleSearch = (event) => {
    // Lógica de busca
  };

  return {
    doneSelected,
    pendingSelected,
    handleDoneClick,
    handlePendingClick,
    handleSearch,
  };
};

const TaskManager = () => {
  const {
    doneSelected,
    pendingSelected,
    handleDoneClick,
    handlePendingClick,
    handleSearch,
  } = useTaskManager();

  return (
    <div>
      <ProgressBar percent={"25"} />

      <div className="headerActions">
        <div className="actionButtons">
          <button
            className={` ${doneSelected ? "selected" : ""}`}
            onClick={handleDoneClick}
          >
            {doneSelected && <FaCheck />} Done
          </button>
          <button
            className={`customButton ${pendingSelected ? "selected" : ""}`}
            onClick={handlePendingClick}
          >
            {pendingSelected && <FaCheck />} Pending
          </button>
        </div>

        <SearchContainer>
          <input
            type="text"
            placeholder="Search items"
            className="searchBar"
            onChange={handleSearch}
          />
          <SearchIcon />
        </SearchContainer>
      </div>
    </div>
  );
};

export default TaskManager;
