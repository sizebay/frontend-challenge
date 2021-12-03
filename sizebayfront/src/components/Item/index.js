/* eslint-disable no-mixed-operators */
import React, { useState } from "react";

import check from '../../assets/check.svg';
import minus from '../../assets/minus.svg';

import { useItem } from '../../contexts/item';

import { ItemContainer } from "./styles";

export default function Item(props) {
  const { itemsCollection, handleRemoveItem, handleItemPending } = useItem();
  const [showButtons, setShowButtons] = useState(false);

  function removeItem() {
    const filteredArr = itemsCollection.filter(itemCol => itemCol.id !== props.data.id);
    handleRemoveItem(filteredArr);
  }

  function finishItem() {
    itemsCollection.map(itemCol => itemCol.id === props.data.id ? props.data.isPending = false : props.data.isPending)
    handleItemPending(itemsCollection);
  }

  const handleShowButtons = () => setShowButtons(prevState => prevState ? false : true);

  return (
    <ItemContainer
      onClick={handleShowButtons}
      showbuttons={showButtons}
    >
      <input
        type="text"
        value={props.data.content}
        readOnly
      />

      {showButtons && props.data.isPending && (
        <>
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
        </>
      )}

      {showButtons && !props.data.isPending && (
        <>
          <button onClick={removeItem}>
            <div className="filler">
              <img src={minus} />
            </div>
          </button>
        </>
      )}
    </ItemContainer>
  );
}
