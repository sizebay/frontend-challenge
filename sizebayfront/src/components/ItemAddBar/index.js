import React, { useState, useEffect } from 'react';

import { useItem } from '../../contexts/item';

import { Wrapper, Input, Button, ButtonAddBorder } from './styles';

export default function ItemAddBar() {
  /*
    SITUAÇÕES QUE SERÁ RENDERIZADO NOVAMENTE:
    - Ao voltar para HOME.
    - Ao digitar qualquer caractere na barra
    - Ao digitar qualquer caractere na barra da busca

    SITUAÇṌES QUE NÃO SERÁ RENDERIZADO:
    - Ao trocar para página de PENDING ou DONE
  */

  const [inputText, setInputText] = useState('');

  const { handleAddItem } = useItem();

  useEffect(() => {
    // console.log('fui renderizado ');
  });

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
