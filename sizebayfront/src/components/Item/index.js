/* eslint-disable no-mixed-operators */
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

import check from '../../assets/check.svg';
import minus from '../../assets/minus.svg';

import { useItem } from '../../contexts/item';

import { ItemContainer } from "./styles";

export default function Item(props) {
  const { itemsCollection, handleRemoveItem, handleDoneItem } = useItem();
  const [showButtons, setShowButtons] = useState(false);

  function removeItem() {
    const filteredArr = itemsCollection.filter(itemCol => itemCol.id !== props.data.id);
    handleRemoveItem(filteredArr);

    toast.error('Tarefa deletada', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      });
  }

  function finishItem() {
    itemsCollection.map(itemCol => itemCol.id === props.data.id ? props.data.isPending = false : props.data.isPending)
    handleDoneItem(itemsCollection);

    toast.success('Tarefa concluída', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      });
  }

  const handleShowButtons = () => setShowButtons(prevState => prevState ? false : true);

  // Ao passar o mouse por cima do ItemContainer, habilita uma flag que mostra um input editavel, ao tirar o mouse de cima, ele desabilita a flag e renderiza um input não editável.
  return (
    <ItemContainer
      onClick={handleShowButtons}
      showbuttons={showButtons}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      {showButtons ? (
        // Editável
        <input
          type="text"
          value={props.data.content}
        />
      ) : (
        // Não-editável
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
