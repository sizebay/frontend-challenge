import React, { useState, useContext } from 'react';

import { itemContext } from '../../contexts/ItemContext';

import { Wrapper, Input, Button } from './styles';

export default function ItemAddBar() {
  const { handleAddItem } = useContext(itemContext);
  const [inputText, setInputText] = useState('');

  function handleInputText(text) {
    setInputText(text);
  }

  function addItem() {
    if (!inputText) return;

    handleAddItem(inputText);
    handleInputText('');
  }

  function addByPressEnter(e) {
    if (e.key === 'Enter') {
      addItem();
      handleInputText('');
    }
  }

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Add new item..."
        onChange={e => handleInputText(e.target.value)}
        value={inputText}
        onKeyUp={addByPressEnter}
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
