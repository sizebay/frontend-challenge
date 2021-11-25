import React, { useState, createContext } from 'react';

export const itemContext = createContext();

export function ItemProvider(props) {
  const [itemText, setItemText] = useState('');
  const [itemsCollection, setItemsCollection] = useState([]);

  function handleText(text) {
    setItemText(text);
  }

  function handleItemCollection(newItem) {
    setItemsCollection(prevState => {
      return [...prevState, newItem]
    });
  }

  return (
    <itemContext.Provider
      value={{
        itemText,
        handleText,
        itemsCollection,
        handleItemCollection,
      }}
    >
      {props.children}
    </itemContext.Provider>
  );
}
