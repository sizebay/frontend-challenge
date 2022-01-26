/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext, useContext } from 'react';
import { generateId } from '../helpers/idGenerator';

export const ItemContext = createContext();

export function ItemProvider(props) {
  const [itemsCollection, setItemsCollection] = useState(() => {
    const dataStoraged = JSON.parse(localStorage.getItem('itemCollection'));

    if (dataStoraged === null) return [];

    return dataStoraged;
  });

  const [disableDone, setDisableDone] = useState(false);

  const createNewItem = (itemText) => {
    const item = {
      id: generateId(),
      content: itemText,
      isPending: true,
    };

    setItemsCollection((prevState) => {
      const newCollection = [...prevState, item];
      localStorage.setItem('itemCollection', JSON.stringify(newCollection));

      return newCollection;
    });
  };

  const removeItem = (updatedCollection) => {
    setItemsCollection(() => {
      localStorage.setItem('itemCollection', JSON.stringify(updatedCollection));
      return updatedCollection;
    });
  };

  const finishItem = (newArr) => setItemsCollection(newArr);

  const handleChangeItemName = (itemModified) => {
    const updatedCollection = itemsCollection.map((itemCol) => (
      (itemCol.id === itemModified.id ? itemModified : itemCol)
    ));
    setItemsCollection(updatedCollection);
  };

  return (
    <ItemContext.Provider
      value={{
        itemsCollection,
        createNewItem,
        removeItem,
        finishItem,
        handleChangeItemName,
        disableDone,
        setDisableDone,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
}

export const useItem = () => useContext(ItemContext);
