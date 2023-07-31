"use client";
import Button from '@components/Button';
import { useItemsContext } from '@context/ItemsContext';
import { IItem } from '@interfaces/IItem';
import React from 'react';

const CategoryFilter: React.FC = () => {
  const ItemsContext = useItemsContext();

  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const handleCategoryClick = (selectedCategory: string | null) => ItemsContext.applyFilterByCategory(selectedCategory);

  const handleItemClick = (category: string | null) => {
    setSelectedCategory((prevSelected) => (prevSelected === category ? null : category));
    handleCategoryClick(category === selectedCategory ? null : category);
  };

  const categories: string[] = Array.from(new Set(ItemsContext.dataFromSource.map((item: IItem) => item.category)));

  const isActive = (category: string | null) => selectedCategory === category;

  return (
    <div className='flex bg-gray-800 justify-around items-center w-full'>
      <Button title={'All'} onClick={() => handleItemClick(null)} active={isActive(null)} />
      {categories.map((category, key) => <Button key={key} title={category} onClick={() => handleItemClick(category)} active={isActive(category)} />)}
    </div>
  );
};

export default CategoryFilter;
