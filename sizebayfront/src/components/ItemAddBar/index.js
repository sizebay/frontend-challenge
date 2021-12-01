import React, { useState, useContext } from 'react';

import { itemContext } from '../../contexts/ItemContext';

import { Wrapper, Input, Button, ButtonAddBorder } from './styles';

export default function ItemAddBar() {
  const [inputText, setInputText] = useState('');

  const { handleAddItem } = useContext(itemContext);

  function handleInputText(text) {
    setInputText(text);
  }

  function clearInput() {
    setInputText('');
  }

  function addItem() {
    if (!inputText) return;

    handleAddItem(inputText);
    clearInput();
  }

  function addByPressEnter(e) {
    if (e.key === 'Enter') {
      addItem();
      clearInput();
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
      <Button onClick={addItem}>
        <ButtonAddBorder>+</ButtonAddBorder>
      </Button>
    </Wrapper>
  );
}
