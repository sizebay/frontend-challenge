import React, { useState, createContext, useContext } from 'react';
import { generateId } from '../helpers/idGenerator';

export const ItemContext = createContext();

export function ItemProvider(props) {
  const [itemsCollection, setItemsCollection] = useState([]);
  const [foundedCollection, setFoundedCollection] = useState([]);

  const [disableDone, setDisableDone] = useState(false);

  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  // * Item Actions
  const createNewItem = itemText => {
    const item = {
      id: generateId(),
      content: itemText,
      isPending: true
    };

    setItemsCollection(prevState => {
      const newCollection = [...prevState, item];
      localStorage.setItem("itemCollection", JSON.stringify(newCollection));

      return newCollection;
    });
  }

  const handleChangeItemName = itemModified => {
    const updatedCollection = itemsCollection.map(itemCol => itemCol.id === itemModified.id ? itemModified : itemCol);
    setItemsCollection(updatedCollection);
  }

  const handleRemoveItem = updatedCollection => setItemsCollection(updatedCollection);
  const handleDoneItem = newArr => setItemsCollection(newArr);

  // * Search Actions
  const handleSearch = e => {
    setSearchText(e.target.value)

    if (e.target.value) {
      setIsSearch(true)
      const foundItemsArray = itemsCollection.filter(itemCollection => itemCollection.content.toLowerCase().includes(searchText.toLowerCase()));
      setFoundedCollection(foundItemsArray);
    } else {
      setIsSearch(false)
    }
  }

  return (
    <ItemContext.Provider
      value={{
        itemsCollection,
        createNewItem,
        handleRemoveItem,
        handleDoneItem,
        searchText,
        isSearch,
        foundedCollection,
        handleSearch,
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
