/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-mixed-operators */
import React, { useContext, useState, useEffect } from 'react';

import { useItem } from '../../contexts/item';

import Item from '../../components/Item';
import { ItemsArea } from '../../components/Item/styles';

import { Container } from './styles';

export default function Done() {
  const { itemsCollection, isSearch, searchText } = useItem();
  const [foundedItems, setFoundedItems] = useState([]);

  const filteredCollection = itemsCollection.filter(item => item.isPending === false);

  function searchItem() {
    const foundItemsArray = filteredCollection.filter(item => item.content.toLowerCase().includes(searchText.toLowerCase()));
    setFoundedItems(foundItemsArray);
  }

  useEffect(() => {
    document.title = 'Done Items';
  });

  useEffect(() => {
    searchItem();
  }, [searchText]);

  return (
    <Container>
      <ItemsArea>
        {!filteredCollection.length && (
          <p>
            There are no items marked as done. <a>Clear the filter here</a> to see all items.
          </p>
        ) ||
          isSearch && (
            foundedItems.map((item, index) => (
              <Item key={index} data={item} />
            ))
          )
          ||
          (
            filteredCollection.map((item, index) => (
              <Item key={index} data={item} />
            ))
          )
        }
      </ItemsArea>
    </Container>
  );
}
