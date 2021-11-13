import React, { useState } from 'react';

import { Wrapper, Form, Item, Input, Button } from './styles';

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
    <Wrapper>
      <Input
        type="text"
        onChange={e => handleItem(e.target.value)}
        placeholder="Add new item..."
      />
      <Button onClick={handleAddItem}>
        <div id="border">
          +
        </div>
      </Button>
    </Wrapper>
  );
}
