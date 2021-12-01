/* eslint-disable no-mixed-operators */
import React, { useContext, useState, useEffect } from 'react';

import { itemContext } from '../../contexts/ItemContext';

import ItemAddBar from '../../components/ItemAddBar';

import Item from '../../components/Item';
import { ItemsArea } from '../../components/Item/styles';

export default function Home() {
  const { itemsCollection, isSearch, searchText } = useContext(itemContext);
  const [foundedItems, setFoundedItems] = useState([]);

  function searchItem() {
    const foundItemsArray = itemsCollection.filter(item => item.content.toLowerCase().includes(searchText));
    setFoundedItems(foundItemsArray);
  }

  useEffect(searchItem, [searchText, itemsCollection]);

  return (
    <>
      <ItemAddBar />

      <ItemsArea>
        {isSearch &&
        (
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
    </>
  );
}
