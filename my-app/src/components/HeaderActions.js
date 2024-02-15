import { FaCheck, FaSearch } from "react-icons/fa";
import "./HeaderActions.css";

const HeaderActions = ({
  doneSelected,
  pendingSelected,
  handleDoneClick,
  handlePendingClick,
  handleSearch,
}) => {
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
          onChange={handleSearch}
        />
        <FaSearch className="searchIcon" />
      </div>
    </div>
  );
};

export default HeaderActions;
