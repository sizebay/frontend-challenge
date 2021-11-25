import React, { useContext } from 'react';

import { itemContext } from '../../contexts/ItemContext';

import { ButtonContainer } from "./styles";

export default function ButtonArea() {
  const { itemsCollection, handleItemCollection } = useContext(itemContext);

  console.log(itemsCollection);

  function removeItem() {

  }

  function finishItem() {

  }

  return (
    <ButtonContainer>
      <button id="removeButton">
        <div className="border">
          -
        </div>
      </button>
      <button id="doneButton">
        <div className="border">
          ✓
        </div>
      </button>
    </ButtonContainer>
  );
}
