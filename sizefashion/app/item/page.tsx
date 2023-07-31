import ProductDetails from '@components/ProductDetails';
import ItemsContextProvider from '@context/ItemsContext';
import React from 'react';

const Item: React.FC = () =>
  <div className="max-w-5xl mx-auto px-4 py-8">
    <ItemsContextProvider>
      <ProductDetails />
    </ItemsContextProvider>
  </div>;

export default Item;
