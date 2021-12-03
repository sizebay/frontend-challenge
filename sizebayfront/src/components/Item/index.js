/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from "react";

import check from '../../assets/check.svg';
import minus from '../../assets/minus.svg';

import { useItem } from '../../contexts/item';

import { ItemContainer } from "./styles";

export default function Item(props) {
  const { itemsCollection, handleRemoveItem, handleItemPending } = useItem();

  function removeItem() {
    const filteredArr = itemsCollection.filter(itemCol => itemCol.id !== props.data.id);
    handleRemoveItem(filteredArr);
  }

  function finishItem() {
    itemsCollection.map(itemCol => itemCol.id === props.data.id ? props.data.isPending = false : props.data.isPending)
    handleItemPending(itemsCollection);
  }

  return (
    <ItemContainer>
      <input
        type="text"
        value={props.data.content}
        readOnly
      />

      <button onClick={removeItem}>
        <div className="filler">
          <img src={minus} />
        </div>
      </button>
      <button onClick={finishItem}>
        <div className="filler">
         <img src={check} />
        </div>
      </button>
    </ItemContainer>
  );
}
