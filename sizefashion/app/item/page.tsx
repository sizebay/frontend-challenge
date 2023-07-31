import ProductDetails from '@components/ProductDetails';
import ItemsContextProvider from '@context/ItemsContext';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const Item: React.FC = () => {

    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <ItemsContextProvider>
          <ProductDetails  />
        </ItemsContextProvider>
      </div>
    );
};

export default Item;
