/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useItem } from '../../contexts/ItemProvider';

import {
  ItemContainer, ItemContainerNoEdit, RemoveButton, DoneButton,
} from './styles';

export default function Item({ data, isEditable = true }) {
  const {
    itemsCollection, removeItem, finishItem, renameItem,
  } = useItem();
  const [showButtons, setShowButtons] = useState(false);
  const [newDescription, setNewDescription] = useState(data.content);

  const handleRemoveItem = (e) => {
    e.preventDefault();

    const filteredArray = itemsCollection.filter((itemCol) => itemCol.id !== data.id);
    removeItem(filteredArray);
  };

  const handleFinishItem = (e) => {
    e.preventDefault();

    const updatedCollection = itemsCollection.map((item) => (
      (item.id === data.id ? { ...item, isPending: false } : item)
    ));
    finishItem(updatedCollection);
  };

  const handleShowButtons = (status) => {
    setShowButtons(status);
  };

  const handleRename = (e) => {
    setNewDescription(() => e.target.value);
    renameItem({ ...data, content: e.target.value });
  };

  return (
    <>
      {isEditable ? (
        <ItemContainer
          onFocus={() => handleShowButtons(true)}
          onBlur={() => handleShowButtons(false)}
        >
          <input
            type="text"
            value={newDescription}
            onChange={handleRename}
          />
          <RemoveButton
            show={showButtons}
            onClick={handleRemoveItem}
          />
          <DoneButton
            show={showButtons}
            onClick={handleFinishItem}
          />
        </ItemContainer>
      ) : (
        <ItemContainerNoEdit>
          <input
            type="text"
            value={data.content}
            readOnly
          />
        </ItemContainerNoEdit>
      )}
    </>
  );
}
