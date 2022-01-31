import { useEffect } from 'react';

import { useItem } from '../../contexts/ItemProvider';
import { useSearch } from '../../contexts/SearchProvider';

import Item from '../../components/Item';
import AddingBar from '../../components/AddingBar';

import { PendingContainer, CustomItemsArea } from './styles';

export default function Pending() {
  const { itemsCollection } = useItem();
  const {
    foundedItems, userSearching, handleSearching, setSearchBoxInputText,
  } = useSearch();

  useEffect(() => {
    document.title = 'Pending Items';
  }, []);

  const cleanSearch = () => {
    handleSearching(false);
    setSearchBoxInputText('');
  };

  return (
    <PendingContainer>
      <AddingBar />

      <CustomItemsArea>
        {
          userSearching && foundedItems.map((item) => item.isPending && (
            <Item key={item.id} data={item} />
          ))
        }

        {
          userSearching && (foundedItems.length === 0) && (
            <p id="searchAndClean">
              Your search found no results.
              {' '}
              <span onClick={cleanSearch}>Clean the search here</span>
              {' '}
              to see all items.
            </p>
          )
        }

        {
          !userSearching && itemsCollection.map((item) => item.isPending && (
            <Item key={item.id} data={item} />
          ))
        }
      </CustomItemsArea>
    </PendingContainer>
  );
}
