/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from "react";

import { useItem } from '../../contexts/item';

import { ItemContainer } from "./styles";

export default function Item(props) {
  // const [itemText, setItemText] = useState(props.data.content);
  const { itemsCollection, handleRemoveItem, handleItemPending, handleChangeItemName } = useItem();

  function removeItem() {
    const filteredArr = itemsCollection.filter(itemCol => itemCol.id !== props.data.id);
    handleRemoveItem(filteredArr);
  }

  function finishItem() {
    itemsCollection.map(itemCol => itemCol.id === props.data.id ? props.data.isPending = false : props.data.isPending)
    handleItemPending(itemsCollection);
  }

  useEffect(() => {
    console.log(`Item MONTADO - ${props.data.content}`)
    // Ao componente Item ser desmontado irá rodar esta função
    return () => {
      console.log(`Item DESMONTADO - ${props.data.content}`)
    }
  })

  return (
    <ItemContainer>
      <input
        type="text"
        value={props.data.content}
        readOnly
      />

      <button
        onClick={removeItem}
      >
      </button>
      <button
        onClick={finishItem}
      >
      </button>
    </ItemContainer>
  );
}
