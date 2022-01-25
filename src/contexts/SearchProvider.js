import { createContext, useContext, useState } from 'react';

import { useItem } from './ItemProvider';

export const SearchContext = createContext();

export function SearchProvider(props) {
  const { itemsCollection } = useItem();

  // Estado do SearchBox
  const [searchBoxInputText, setSearchBoxInputText] = useState('');

  // Pegara os itens criados que ficam no itemsCollection e retornara um array de encontrados, as páginas só exibirão os encontrados e não o itemsCollection
  const [foundedItems, setFoundedItems] = useState([]);
  const [userSearching, setUserSearching] = useState(false);
  const [cleanUserSearching, setCleanUserSearching] = useState(false);

  const searchItems = text => {
    setFoundedItems(() => {
      const filtered = itemsCollection.filter(item => item.content.toLowerCase().includes(text.toLowerCase()));

      return filtered;
    });
  }

  const handleSearching = searchStatus => {
    setUserSearching(searchStatus);
  }

  const handleCleanUserSearching = () => {
    setCleanUserSearching(prevState => !prevState);
  }

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
        setSearchBoxInputText
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext);
