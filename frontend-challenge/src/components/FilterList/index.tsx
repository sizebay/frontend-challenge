import React from "react";
import { FilterStatus } from "../../types/FilterStatus";

type FilterProps = {
  onFilter: (filter: FilterStatus) => void;
};

const FilterList = (props: FilterProps) => {
  const { onFilter } = props;

  return (
    <div>
      <div>
        <button type="button" onClick={() => onFilter(FilterStatus.DONE)}>
          Done
        </button>
        <button type="button" onClick={() => onFilter(FilterStatus.PENDING)}>
          Pending
        </button>
      </div>
      <div>
        <input className="filter-list" placeholder="Search items" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default FilterList;
