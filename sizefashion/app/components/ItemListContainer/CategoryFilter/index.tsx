'use client';
import Button from '@components/Button';
import { useItems } from '@context/Items';
import Item from '@interfaces/Item';
import React from 'react';

const CategoryFilter = () => {
  const itemsContext = useItems();

  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const handleCategory = (category: string | null) => () => {
    setSelectedCategory((prevSelected) => (prevSelected === category ? null : category));
    itemsContext.applyFilterByCategory(category);
  };

  const categories: string[] = Array.from(new Set(itemsContext.dataFromSource.map((item: Item) => item.category)));

  return (
    <div className="flex bg-gray-800 justify-around items-center w-full">
      <Button title="All" onClick={handleCategory(null)} active={selectedCategory === null} />
      {categories.map((category, key) => (
        <Button key={key} title={category} onClick={handleCategory(category)} active={selectedCategory === category} />
      ))}
    </div>
  );
};

export default CategoryFilter;
