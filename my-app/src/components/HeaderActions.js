import { FaCheck, FaSearch } from "react-icons/fa";
import "./HeaderActions.css";
import { useState } from "react";

const HeaderActions = ({
  doneSelected,
  pendingSelected,
  handleDoneClick,
  handlePendingClick,
  handleSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
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

      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search items"
          className="searchBar"
          value={searchTerm}
          onChange={handleSearchChange} // Utiliza a função modificada para atualizar o estado e chamar handleSearch
        />
        <FaSearch className="searchIcon" />
      </div>
    </div>
  );
};

export default HeaderActions;
