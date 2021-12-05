/* eslint-disable no-mixed-operators */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { useItem } from '../../contexts/item';

import Item from '../../components/Item';
import { ItemsArea } from '../../components/Item/styles';

export default function Pending() {
  const { itemsCollection, isSearch, searchText, foundedCollection } = useItem();
  const [foundedItems, setFoundedItems] = useState([]);

  const filteredCollection = itemsCollection.filter(item => item.isPending === true);

  function searchItem() {
    const foundItemsArray = filteredCollection.filter(item => item.content.toLowerCase().includes(searchText.toLowerCase()));
    setFoundedItems(foundItemsArray);
  }

  useEffect(() => {
    document.title = 'Pending Items';
  });

  useEffect(() => {
    searchItem();
  }, [searchText]);

  return (
    <ItemsArea>
      {isSearch && (
        foundedItems.map((item, index) => (
          <Item key={index} data={item} />
        ))
      )
        ||
        (
          foundedCollection.map((item, index) => (
            <Item key={index} data={item} />
          ))
        )}
    </ItemsArea>
  );
}
