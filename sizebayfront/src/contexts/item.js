import React, { useState } from 'react';
import { generateId } from '../helpers/idGenerator';

export const ItemContext = React.createContext();

export function ItemProvider(props) {
  const [itemsCollection, setItemsCollection] = useState([]);

  const [filterControl, setFilterControl] = useState('default');
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

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

  function handleChangeItemName(itemModified) {
    const updatedCollection = itemsCollection.map(itemCol => itemCol.id === itemModified.id ? itemModified : itemCol);
    setItemsCollection(updatedCollection);
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

  function handleIsSearch(value) {
    setIsSearch(value);
  }

  function handleSearchText(text) {
    setSearchText(text);
  }

  return (
    <ItemContext.Provider
      value={{
        itemsCollection,
        handleAddItem,
        handleRemoveItem,
        handleItemPending,
        filterControl,
        handleClickDone,
        handleClickPending,
        isSearch,
        handleIsSearch,
        searchText,
        handleSearchText,
        handleChangeItemName,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
}

// Creating a custom hook to acess the ItemContext
export const useItem = () => React.useContext(ItemContext);
