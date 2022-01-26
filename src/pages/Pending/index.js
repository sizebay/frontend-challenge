/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import { useEffect } from 'react';

import { useItem } from '../../contexts/ItemProvider';

import Item from '../../components/Item';

import { PendingContainer, CustomItemsArea } from './styles';

export default function Pending() {
  const { itemsCollection, isSearch, searchText } = useItem();

  useEffect(() => {
    document.title = 'Pending Items';
  }, []);

  return (
    <PendingContainer>
      <CustomItemsArea>
        {isSearch ? (
          ((itemsCollection.filter((item) => item.isPending)).filter((item) => item.content.toLowerCase().includes(searchText.toLowerCase()))).map((item, index) => (
            <Item key={index} data={item} />
          ))
        ) : (
          (itemsCollection.filter((item) => item.isPending)).map((item, index) => (
            <Item key={index} data={item} />
          ))
        )}
      </CustomItemsArea>
    </PendingContainer>
  );
}
