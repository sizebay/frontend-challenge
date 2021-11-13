// import React, { useState } from 'react';
import React from 'react';

import ItemBar from './ItemBar';

import { Item } from './styles';

export default function ItemBox() {
  // const [item, setItem] = useState('');
  // const [itemsInventory, setItemsInventory] = useState([]);

  // function handleItem(e) {
  //   setItem(e);
  // }

  // function handleAddItem(e) {
  //   e.preventDefault();

  //   if (item) {
  //     setItemsInventory(prevState => [...prevState, item])
  //   }
  // }

  return (
    <>
      <ItemBar />

      <Item>
        Drive a Cadillac across the Irish Sea
      </Item>
      <Item>
        Sell an elevator to Geronimo
      </Item>
      <Item>
        Take a pound of love and cook it in the stew
      </Item>
    </>
  );
}
