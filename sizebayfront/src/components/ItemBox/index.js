import React, { useState } from 'react';

import { Form, Item } from './styles';

export default function ItemBox() {
  const [item, setItem] = useState('');
  const [itemsInventory, setItemsInventory] = useState([]);

  function handleItem(e) {
    setItem(e);
  }

  function handleAddItem(e) {
    e.preventDefault();

    if (item) {
      setItemsInventory(prevState => [...prevState, item])
    }
  }

  return (
    <>
      <Form>
        <input
          type="text"
          onChange={e => handleItem(e.target.value)}
          placeholder="Add new item..."
        />
        <button
          onClick={handleAddItem}
        >
          +
        </button>
      </Form>

      {itemsInventory.map(item => (
        <Item key={Math.random() * Math.random()} >
          {item}
        </Item>
      ))}
    </>
  );
}
