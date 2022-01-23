import React, { useState } from 'react';

import { useItem } from '../../contexts/ItemProvider';

import { AddingBarContainer, Input, Button, ButtonAddBorder } from './styles';

export default function AddingBar() {
  const [inputText, setInputText] = useState('');

  const { createNewItem } = useItem();

  function handleInputText(e) {
    const text = e.target.value;
    setInputText(text);
  }

  function clearInput() {
    setInputText('');
  }

  function addByPressEnter(e) {
    if (e.key === 'Enter') {
      addItem();
      clearInput();
    }
  }

  function addItem() {
    if (!inputText) return;
    if (inputText.startsWith(' ')) return;

    createNewItem(inputText);
    clearInput();
  }

  return (
    <AddingBarContainer>
      <Input
        type="text"
        placeholder="Add new item..."
        onChange={handleInputText}
        value={inputText}
        onKeyUp={addByPressEnter}
      />
      <Button onClick={addItem}>
        <ButtonAddBorder>+</ButtonAddBorder>
      </Button>
    </AddingBarContainer>
  );
}
