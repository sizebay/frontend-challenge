"use client";
import ClickableItem from '@components/ClickableItem';
import LoadingOverlay from '@components/LoadingOverlay';
import { useItemsContext } from '@context/ItemsContext';
import { IItem } from '@interfaces/IItem';
import React from 'react';


const ItemsGrid: React.FC = () => {

  const ItemsContext = useItemsContext();

  const [data, setData] = React.useState<IItem[]>([]);

  React.useEffect(() => {

    console.log(ItemsContext)

    setData(ItemsContext.manipulatedData)
  }, [ItemsContext])

  const emptyState = (text: string) => {
    return (
      <div className='flex items-center justify-center bg-gray-700 h-44 w-full'>
        <span>{text}</span>
      </div>
    )
  }

  if (ItemsContext.fetching) return <LoadingOverlay />;
  if (data.length === 0) return emptyState('Nothing was found 😔');

  return (
    <div className='w-full flex-1 flex flex-wrap flex-row justify-center'>
      {data.map((item, i) => <ClickableItem key={i} item={item} id={i} />)}
    </div>
  )
};

export default ItemsGrid;
