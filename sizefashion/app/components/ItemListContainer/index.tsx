import TextInput from '@components/Input/Text';
import LoadingOverlay from '@components/LoadingOverlay';
import React from 'react';
import SortingFilter from './SortingFilter';
import CategoryFilter from './CategoryFilter';

const ItemsGrid = React.lazy(() => import('./ItemsGrid'))

const ItemListContainer = () =>
  <div className='max-w-[920px] min-w-[66%] flex flex-col p-4 flex-1'>
    <div className='flex bg-gray-800 min-h-11 p-2 mt-3 flex-col'>
      <div className='flex flex-wrap flex-row justify-center items-center w-full'>
        <TextInput />
        <SortingFilter />
      </div>
      <CategoryFilter />
    </div>
    <React.Suspense fallback={<LoadingOverlay fullscreen={false} />}>
      <ItemsGrid />
    </React.Suspense>
  </div>;

export default ItemListContainer;
