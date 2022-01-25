import React, { useState } from "react";

import check from '../../assets/check.svg';
import minus from '../../assets/minus.svg';

import { useItem } from '../../contexts/ItemProvider';

import { ItemContainer } from "./styles";

export default function Item(props) {
  const { itemsCollection, removeItem, finishItem } = useItem();
  const [showButtons, setShowButtons] = useState(false);

  function handleRemoveItem() {
    const filteredArray = itemsCollection.filter(itemCol => itemCol.id !== props.data.id);
    removeItem(filteredArray);
  }

  function handleFinishItem() {
    const updatedCollection = itemsCollection.map(item => item.id === props.data.id ? {...item, isPending: false} : item);
    finishItem(updatedCollection);
  }

  const handleShowButtons = () => setShowButtons(prevState => prevState ? false : true);

  return (
    <ItemContainer
      onClick={handleShowButtons}
      showbuttons={{ showButtons, isPending: props.data.isPending }}
    >
        <input
          type="text"
          value={props.data.content}
          readOnly
        />
      {showButtons && props.data.isPending && (
        <>
          <button onClick={handleRemoveItem}>
            <div className="filler">
              <img src={minus} alt="remove button" />
            </div>
          </button>
          <button onClick={handleFinishItem}>
            <div className="filler">
              <img src={check} alt="finish button" />
            </div>
          </button>
        </>
      )}

      {showButtons && !props.data.isPending && (
        <button onClick={handleRemoveItem} />
      )}
    </ItemContainer>
  );
}
