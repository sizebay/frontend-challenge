/* eslint-disable no-mixed-operators */
import React, { useState, useContext } from "react";

import { itemContext } from '../../contexts/ItemContext';

import { Container, ContentArea } from "./styles";

export default function Item({ data }) {
  const [newText, setNewText] = useState(data.content);

  const { itemsCollection, handleRemoveItem, handleItemPending, handleChangeItemName } = useContext(itemContext);

  function changeText(e) {
    setNewText(e.target.value);

    const itemModified = {
      ...data,
      content: e.target.value
    }

    handleChangeItemName(itemModified);
  }

  function removeItem() {
    const filteredArr = itemsCollection.filter(itemCol => itemCol.id !== data.id);
    handleRemoveItem(filteredArr);
  }

  function finishItem() {
    itemsCollection.map(itemCol => itemCol.id === data.id ? data.isPending = false : data.isPending)
    handleItemPending(itemsCollection);
  }

  return (
    <Container isPending={data.isPending}>
      {data.isPending &&
        (
          <input
            type="text"
            value={data.content}
            readOnly
          />
        )
        ||
        (
        <span>
          {data.content}
        </span>
      )}

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
