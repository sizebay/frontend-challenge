/* eslint-disable no-mixed-operators */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { useItem } from '../../contexts/item';

import Item from '../../components/Item';
import { ItemsArea } from '../../components/Item/styles';

export default function Pending() {
  const { itemsCollection, isSearch, searchText } = useItem();
  const [foundedItems, setFoundedItems] = useState([]);

  const filteredCollection = itemsCollection.filter(item => item.isPending === true);

  function searchItem() {
    const foundItemsArray = filteredCollection.filter(item => item.content.toLowerCase().includes(searchText));
    setFoundedItems(foundItemsArray);
  }

  useEffect(() => {
    searchItem();
    document.title = 'Pending Items'
  }, [searchText, itemsCollection]);

  return (
    <ItemsArea>
      {isSearch && (
        foundedItems.map((item, index) => (
          <Item key={index} data={item} />
        ))
      )
        ||
        (
          filteredCollection.map((item, index) => (
            <Item key={index} data={item} />
          ))
        )}
    </ItemsArea>
  );
}
