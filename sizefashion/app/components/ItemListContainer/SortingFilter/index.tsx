"use client";
import SelectInput from '@components/Input/Select';
import { useItemsContext } from '@context/ItemsContext';
import { ISelectInputOptions } from '@interfaces/ISelectInputOptions';
import React from 'react';

const SortingFilter = () => {
  const ItemsContext = useItemsContext();

  const [sortOrder, setSortOrder] = React.useState('');

  const selectInputOptions: ISelectInputOptions[] = [
    { label: 'Sort by...', value: '' },
    { label: 'Title (A - Z)', value: "titleAsc" },
    { label: 'Title (Z - A)', value: "titleDesc" }
  ];

  const handleSortChange = (value: string) => {
    setSortOrder(value);
    ItemsContext.applySorting(value);
  };

  return (
    <SelectInput
      options={selectInputOptions}
      value={sortOrder}
      onChange={(e) => handleSortChange(e)}
    />
  );
};

export default SortingFilter;
