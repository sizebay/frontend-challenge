/* eslint-disable no-mixed-operators */
import React, { useState, useContext } from "react";

import { itemContext } from '../../contexts/ItemContext';

import { Container } from "./styles";

export default function Item(props) {
  const [itemText, setItemText] = useState(props.data.content);
  const [isPending, setIsPending] = useState(props.data.isPending);

  const { itemsCollection, handleRemoveItem, handleItemPending, handleChangeItemName } = useContext(itemContext);

  function removeItem() {
    const filteredArr = itemsCollection.filter(itemCol => itemCol.id !== props.data.id);
    handleRemoveItem(filteredArr);
  }

  function finishItem() {
    itemsCollection.map(itemCol => itemCol.id === props.data.id ? props.data.isPending = false : props.data.isPending)
    setIsPending(true);
    handleItemPending(itemsCollection);
  }

   function renameItem(e) {
    setItemText(e.target.value);
    handleChangeItemName({ id: props.data.id, content: itemText, isPending });
  }

  return (
    <Container isPending={isPending}>
      <input
        type="text"
        value={itemText}
        onChange={renameItem}
        onBlur={renameItem}
        readOnly={isPending ? false : true}
      />

      <button
        onClick={removeItem}
      >
      </button>
      <button
        onClick={finishItem}
      >
      </button>
    </Container>
  );
}
