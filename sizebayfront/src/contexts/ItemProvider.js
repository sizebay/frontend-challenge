import React, { useState, createContext } from 'react';

export const itemContext = createContext();

export function ItemProvider(props) {
  const [itemText, setItemText] = useState('');
  const [itemsCollection, setItemsCollection] = useState([]);

  return (
    <itemContext.Provider
      value={{
        itemText,
        setText: setItemText,
        itemsCollection,
        setItemsCollection,
      }}
    >
      {props.children}
    </itemContext.Provider>
  );
}
