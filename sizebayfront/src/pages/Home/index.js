/* eslint-disable no-mixed-operators */
import React, { useState, useEffect } from 'react';
import { useItem } from '../../contexts/item';
import { ItemsArea } from '../../components/Item/styles';

import ItemAddBar from '../../components/ItemAddBar';
import Item from '../../components/Item';

import { HomeContainer } from './styles';

export default function Home() {
  const { itemsCollection, isSearch, searchText } = useItem();
  const [foundedItems, setFoundedItems] = useState([]);

  function searchItem() {
    const foundItemsArray = itemsCollection.filter(item => item.content.toLowerCase().includes(searchText));
    setFoundedItems(foundItemsArray);
  }

  useEffect(searchItem, [searchText, itemsCollection]);

  return (
    <HomeContainer>
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
    </HomeContainer>
  );
}
