import React, { useState, createContext } from 'react';
import { generateId } from '../helpers/idGenerator';

export const itemContext = createContext();

export function ItemProvider(props) {
  const [itemsCollection, setItemsCollection] = useState([]);
  const [filterControl, setFilterControl] = useState('default');

  function handleAddItem(itemText) {
    const itemModel = {
      id: generateId(),
      content: itemText,
      isPending: true
    }

    setItemsCollection(prevState => {
      return [...prevState, itemModel]
    });
  }

  function handleRemoveItem(arr) {
    setItemsCollection(arr);
  }

  function handleItemPending(newArr) {
    setItemsCollection(newArr);
  }

  function handleClickDone() {
    if (filterControl !== 'default' && filterControl !== 'pending') {
      setFilterControl('default');
    } else {
      setFilterControl(prevState => (prevState !== 'done') ? 'done' : prevState);
    }
  }

  function handleClickPending() {
    if (filterControl !== 'default' && filterControl !== 'done') {
      setFilterControl('default');
    } else {
      setFilterControl(prevState => (prevState !== 'pending') ? 'pending' : prevState);
    }
  }

  return (
    <itemContext.Provider
      value={{
        itemsCollection,
        handleAddItem,
        handleRemoveItem,
        handleItemPending,
        filterControl,
        handleClickDone,
        handleClickPending,
      }}
    >
      {props.children}
    </itemContext.Provider>
  );
}
