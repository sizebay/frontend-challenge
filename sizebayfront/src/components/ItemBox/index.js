import React, { useState, useContext } from 'react';

import { itemContext } from '../../contexts/ItemProvider';

import ItemBar from '../ItemBar';
import Item from '../Item';

export default function ItemBox() {
  const { itemsCollection } = useContext(itemContext);

  return (
    <>
      <ItemBar />

      {itemsCollection.map((item, index) => (
        <Item key={index} content={item} />
      ))}
    </>
  );
}
