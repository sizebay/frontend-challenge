import React from 'react';
import { useItemsContext } from 'context/ItemsContext';
import { IItem } from 'interfaces/IItem';

const CategoryFilter: React.FC = () => {
  const ItemsContext = useItemsContext();

  const handleCategoryClick = (selectedCategory: string | null) => {
    ItemsContext.applyFilterByCategory(selectedCategory);
  };

  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const handleItemClick = (category: string | null) => {
    setSelectedCategory((prevSelected) => (prevSelected === category ? null : category));
    handleCategoryClick(category === selectedCategory ? null : category);
  };

  const categories: string[] = Array.from(
    new Set(ItemsContext.dataFromSource.map((item: IItem) => item.category))
  );


  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <div
        key="all"
        onClick={() => handleItemClick(null)}
        style={{
          padding: '8px 12px',
          backgroundColor: selectedCategory === null ? '#d1ecff' : '#eee',
          cursor: 'pointer',
        }}
      >
        All
      </div>
      {categories.map((category) => (
        <div
          key={category}
          onClick={() => handleItemClick(category)}
          style={{
            padding: '8px 12px',
            backgroundColor: selectedCategory === category ? '#d1ecff' : '#eee',
            cursor: 'pointer',
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;