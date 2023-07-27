import React from 'react';
import { useItemsContext } from 'context/ItemsContext';

const SortingFilter = () => {
  const ItemsContext = useItemsContext();
  const [sortOrder, setSortOrder] = React.useState('');

  const handleSortChange = (event: { target: { value: any; }; }) => {
    const selectedValue = event.target.value;
    setSortOrder(selectedValue);
    ItemsContext.applySorting(selectedValue);
  };

  return (
    <div>
      <label htmlFor="sortSelect" style={{ color: '#d1ecff', marginRight: 6, fontSize: 14 }}>
        Sort by:
      </label>
      <select
        id="sortSelect"
        value={sortOrder}
        onChange={handleSortChange}
        style={{
          color: '#d1ecff',
          backgroundColor: '#403b37',
          borderWidth: 0,
          padding: '4px 8px',
        }}
      >
        <option value="">...</option>
        <option value="titleAsc">Title (A - Z)</option>
        <option value="titleDesc">Title (Z - A)</option>
      </select>
    </div>
  );
}

export default SortingFilter;
