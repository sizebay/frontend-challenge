import { useItemsContext } from 'context/ItemsContext';
import React from 'react';

export default function TextInput() {

  const ItemsContext = useItemsContext();
  const [searchText, setSearchText] = React.useState('');

  const handleInputChange = (event: { target: { value: string; }; }) => {
    setSearchText(event.target.value);
    ItemsContext.applyFilter(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search..."
        style={{
          color: '#d1ecff',
          backgroundColor: '#403b37',
          borderWidth: 0,
          padding: '4px 8px',
        }}
      />
    </div>
  );
}
