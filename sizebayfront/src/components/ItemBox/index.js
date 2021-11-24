import React, { useState, useContext } from 'react';

import { itemContext } from '../../contexts/ItemProvider';

import ItemBar from '../ItemBar';
import Item from '../Item';
import { ItemsArea } from './styles';

export default function ItemBox() {
  const { itemsCollection } = useContext(itemContext);

  return (
    <>
      <ItemBar />

      <ItemsArea>
        {itemsCollection.map((item, index) => (
          <Item key={index} content={item} />
        ))}
      </ItemsArea>
    </>
  );
}
