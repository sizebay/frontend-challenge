import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

import check from '../../assets/check.svg';
import minus from '../../assets/minus.svg';

import { useItem } from '../../contexts/item';

import { ItemContainer } from "./styles";

export default function Item(props) {
    /*
    SITUAÇÕES QUE SERÁ RENDERIZADO NOVAMENTE:
    - Ao ser criado um novo ITEM
    - Quando um ITEM é CLICADO
    - Quando um ITEM é FINALIZADO

    SITUAÇṌES QUE NÃO SERÁ RENDERIZADO:
    - Ao trocar para página de PENDING ou DONE
  */

  useEffect(() => {
    // console.log('ITEM renderizado');
  })

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
    const updatedCollection = [];
    itemsCollection.forEach(itemFromCollection => {
      if (itemFromCollection.id === props.data.id) {
        updatedCollection.push({ ...itemFromCollection, isPending: false });
      } else {
        updatedCollection.push(itemFromCollection);
      }
    })

    handleDoneItem(updatedCollection);

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
