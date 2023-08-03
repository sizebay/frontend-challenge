"use client";
import SelectInput from '@components/Input/Select';
import { useItems } from '@context/Items';
import { SelectInputOptions } from '@interfaces/SelectInputOptions';
import React from 'react';

const SortingFilter = () => {
  const itemsContext = useItems();

  const [sortOrder, setSortOrder] = React.useState('');

  const selectInputOptions: SelectInputOptions[] = [
    { label: "Sort by...", value: "" },
    { label: "Title (A - Z)", value: "titleAsc" },
    { label: "Title (Z - A)", value: "titleDesc" }
  ];

  const handleSortChange = (value: string) => {
    setSortOrder(value);
    itemsContext.applySorting(value);
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
