import React, { useState } from 'react';
import { generateId } from '../helpers/idGenerator';

export const ItemContext = React.createContext();

export function ItemProvider(props) {
  const [itemsCollection, setItemsCollection] = useState([]);

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
