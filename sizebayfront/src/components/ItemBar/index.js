import React, { useState, useContext } from 'react';

import { itemContext } from '../../contexts/ItemProvider';

import { Wrapper, Input, Button } from './styles';

export default function ItemBar() {
  const { itemText, setText, itemsCollection, setItemsCollection } = useContext(itemContext);

  function handleItemText(e) {
    setText(e.target.value);
  }

  function addItem() {
    if (!itemText) return;

    setItemsCollection(prevState => {
      return [...prevState, itemText]
    });
  }

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Add new item..."
        onChange={handleItemText}
      />
      <Button
        onClick={addItem}
      >
        <div id="border">
          +
        </div>
      </Button>
    </Wrapper>
  );
}
