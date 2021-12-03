import React, { useState } from 'react';
import { generateId } from '../helpers/idGenerator';

export const ItemContext = React.createContext();

export function ItemProvider(props) {
  const [itemsCollection, setItemsCollection] = useState([]);

  const [filterControl, setFilterControl] = useState('default');

  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  // * Item Actions
  const handleAddItem = itemText => {
    const itemModel = {
      id: generateId(),
      content: itemText,
      isPending: true
    }

    setItemsCollection(prevState => {
      return [...prevState, itemModel]
    });
  }

  const handleChangeItemName = itemModified => {
    const updatedCollection = itemsCollection.map(itemCol => itemCol.id === itemModified.id ? itemModified : itemCol);
    setItemsCollection(updatedCollection);
  }

  const handleRemoveItem = arr => setItemsCollection(arr);
  const handleItemPending = newArr => setItemsCollection(newArr);

  // * Filter Actions
  const handleClickDone = () => {
    if (filterControl !== 'default' && filterControl !== 'pending') {
      setFilterControl('default');
    } else {
      setFilterControl(prevState => (prevState !== 'done') ? 'done' : prevState);
    }
  }

  const handleClickPending = () => {
    if (filterControl !== 'default' && filterControl !== 'done') {
      setFilterControl('default');
    } else {
      setFilterControl(prevState => (prevState !== 'pending') ? 'pending' : prevState);
    }
  }

  // * Search Actions
  const handleIsSearch = value => setIsSearch(value);
  const handleSearchText = text => setSearchText(text);

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

// Creating a custom hook to access the ItemContext
export const useItem = () => React.useContext(ItemContext);
