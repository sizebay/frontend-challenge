import React, { useState } from 'react';
import { useItem } from '../../contexts/item';
import { Wrapper, Input, Button, ButtonAddBorder } from './styles';

export default function ItemAddBar() {
  const [inputText, setInputText] = useState('');

  const { handleAddItem } = useItem();

  function handleInputText(text) {
    setInputText(text);
  }

  function clearInput() {
    setInputText('');
  }

  function addItem() {
    if (!inputText) return;
    if (inputText.startsWith(' ')) return;

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
