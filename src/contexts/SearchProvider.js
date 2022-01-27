/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';

import { useItem } from './ItemProvider';

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const { itemsCollection } = useItem();
  const [searchBoxInputText, setSearchBoxInputText] = useState('');

  const [foundedItems, setFoundedItems] = useState([]);
  const [userSearching, setUserSearching] = useState(false);
  const [cleanUserSearching, setCleanUserSearching] = useState(false);

  const searchItems = (text) => {
    setFoundedItems(() => {
      const filtered = itemsCollection.filter((item) => (
        item.content.toLowerCase().includes(text.toLowerCase())
      ));

      return filtered;
    });
  };

  const handleSearching = (searchStatus) => {
    setUserSearching(searchStatus);
  };

  const handleCleanUserSearching = () => {
    setCleanUserSearching((prevState) => !prevState);
  };

  return (
    <SearchContext.Provider
      value={{
        searchItems,
        foundedItems,
        handleSearching,
        userSearching,
        handleCleanUserSearching,
        cleanUserSearching,
        searchBoxInputText,
        setSearchBoxInputText,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => useContext(SearchContext);
