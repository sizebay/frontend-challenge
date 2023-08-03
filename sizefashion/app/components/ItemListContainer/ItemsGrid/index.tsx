"use client";
import ClickableItem from '@components/ClickableItem';
import EmptyState from '@components/EmptyState';
import LoadingOverlay from '@components/LoadingOverlay';
import { useItems } from '@context/Items';
import Item from '@interfaces/Item';
import React from 'react';

const ItemsGrid = () => {

  const itemsContext = useItems();

  const [data, setData] = React.useState<Item[]>([]);

  React.useEffect(() => { setData(itemsContext.manipulatedData) }, [itemsContext])

  if (itemsContext.fetching) return <LoadingOverlay />;
  if (data.length === 0) return <EmptyState text="Nothing was found 😔" />

  return (
    <div className="w-full flex-1 flex flex-wrap flex-row justify-center">
      {data.map((item, i) => <ClickableItem key={i} item={item} id={i} />)}
    </div>
  )
};

export default ItemsGrid;
