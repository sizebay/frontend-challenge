"use client";
import { useItemsContext } from '@context/ItemsContext';
import React from 'react';

export default function TextInput() {

  const ItemsContext = useItemsContext();
  const [searchText, setSearchText] = React.useState('');

  const handleInputChange = (event: { target: { value: string; }; }) => {
    setSearchText(event.target.value);
    ItemsContext.applyFilter(event.target.value);
  };

  return (
    <input
      type="text"
      value={searchText}
      onChange={handleInputChange}
      placeholder="Search..."
      className='text-blue-100 bg-gray-700 border-0 px-2 py-1 w-3/4'
    />
  );
}