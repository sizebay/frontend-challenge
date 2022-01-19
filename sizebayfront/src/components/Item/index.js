import React, { useState } from "react";
import check from '../../assets/check.svg';
import minus from '../../assets/minus.svg';
import { useItem } from '../../contexts/item';
import { ItemContainer } from "./styles";

export default function Item(props) {
  const { itemsCollection, handleRemoveItem, handleDoneItem } = useItem();
  const [showButtons, setShowButtons] = useState(false);

  function removeItem() {
    const filteredArray = itemsCollection.filter(itemCol => itemCol.id !== props.data.id);
    handleRemoveItem(filteredArray);
  }

  function finishItem() {
    const updatedCollection = [];
    itemsCollection.forEach(itemFromCollection => {
      if (itemFromCollection.id === props.data.id) {
        updatedCollection.push({ ...itemFromCollection, isPending: false });
      } else {
        updatedCollection.push(itemFromCollection);
      }
    });

    handleDoneItem(updatedCollection);
  }

  const handleShowButtons = () => setShowButtons(prevState => prevState ? false : true);

  return (
    <ItemContainer
      onClick={handleShowButtons}
      showbuttons={showButtons}
    >
      {showButtons ? (
        <input
          type="text"
          value={props.data.content}
          // Talvez aqui vá o futuro "state"
          readOnly
        />
      ) : (
        <input
          type="text"
          value={props.data.content}
          readOnly
        />
      )}

      {showButtons && props.data.isPending && (
        <>
          <button onClick={removeItem}>
            <div className="filler">
              <img src={minus} alt="remove button" />
            </div>
          </button>
          <button onClick={finishItem}>
            <div className="filler">
            <img src={check} alt="finish button" />
            </div>
          </button>
        </>
      )}

      {showButtons && !props.data.isPending && (
        <>
          <button onClick={removeItem}>
            <div className="filler">
              <img src={minus} alt="remove button" />
            </div>
          </button>
        </>
      )}
    </ItemContainer>
  );
}
