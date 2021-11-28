/* eslint-disable no-mixed-operators */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';

import { itemContext } from '../../contexts/ItemContext';

import Item from '../Item';
import { ItemsArea } from './styles';

export default function ItemBox() {
  const { itemsCollection, isSearch, searchText } = useContext(itemContext);
  const [foundedItems, setFoundedItems] = useState([]);

  function searchItem() {
    const foundItemsArray = itemsCollection.filter(item => item.content.toLowerCase().includes(searchText));
    setFoundedItems(foundItemsArray);
  }

  useEffect(searchItem, [searchText]);

  return (
    <ItemsArea>
      {isSearch && (
        foundedItems.map((item, index) => (
          <Item key={index} data={item} />
        ))
      )
        ||
      (
        itemsCollection.map((item, index) => (
          <Item key={index} data={item} />
        ))
      )}
    </ItemsArea>
  );
}
