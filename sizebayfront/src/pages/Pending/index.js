/* eslint-disable no-mixed-operators */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';

import { itemContext } from '../../contexts/ItemContext';

import Item from '../../components/Item';
import { ItemsArea } from '../../components/ItemBox/styles';

export default function Pending() {
  const { itemsCollection, isSearch, searchText } = useContext(itemContext);
  const [foundedItems, setFoundedItems] = useState([]);

  const filteredCollection = itemsCollection.filter(item => item.isPending === true);

  function searchItem() {
    const foundItemsArray = filteredCollection.filter(item => item.content.toLowerCase().includes(searchText));
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
          filteredCollection.map((item, index) => (
            <Item key={index} data={item} />
          ))
        )}
    </ItemsArea>
  );
}
