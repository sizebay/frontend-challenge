import React, { useContext } from 'react';

import { itemContext } from '../../contexts/ItemContext';

import { ButtonContainer } from "./styles";

export default function ButtonArea({ item }) {
  const { itemsCollection, handleRemoveItem, handleItemPending } = useContext(itemContext);

  function removeItem() {
    const filteredArr = itemsCollection.filter(itemCol => itemCol.id !== item.id);
    handleRemoveItem(filteredArr);
  }

  function finishItem() {
    itemsCollection.map(itemCol => itemCol.id === item.id ? item.isPending = false : item.isPending)
    handleItemPending(itemsCollection);
  }

  return (
    <ButtonContainer>
      <button
        id="removeButton"
        onClick={removeItem}
      >
        <div className="border">
          -
        </div>
      </button>

      <button
        id="doneButton"
        onClick={finishItem}
      >
        <div className="border">
          ✓
        </div>
      </button>
    </ButtonContainer>
  );
}
