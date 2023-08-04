"use client";
import { useItems } from '@context/Items';
import React from 'react';

const TextInput = () => {

  const itemsContext = useItems();
  const [searchText, setSearchText] = React.useState('');

  const handleInputChange = (event: { target: { value: string; }; }) => {
    setSearchText(event.target.value);
    itemsContext.applyFilter(event.target.value);
  };

  return (
    <input
      type="text"
      data-testid="textinput"
      value={searchText}
      onChange={handleInputChange}
      placeholder="Search..."
      className="text-blue-100 bg-gray-700 border-0 px-2 py-1 w-3/4"
    />
  );
};

export default TextInput;
