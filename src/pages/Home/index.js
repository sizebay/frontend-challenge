/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react';

import { useItem } from '../../contexts/ItemProvider';
import { useSearch } from '../../contexts/SearchProvider';

import AddingBar from '../../components/AddingBar';
import Item from '../../components/Item';

import { HomeContainer } from './styles';
import { ItemsArea } from '../../styles/ItemsArea';

export default function Home() {
  const { itemsCollection } = useItem();
  const {
    foundedItems, userSearching, handleSearching, setSearchBoxInputText,
  } = useSearch();

  useEffect(() => {
    document.title = 'Home';
  }, []);

  const cleanSearch = () => {
    handleSearching(false);
    setSearchBoxInputText('');
  };

  return (
    <HomeContainer>
      <AddingBar />
      <ItemsArea>
        {
          userSearching && foundedItems.map((item) => <Item key={item.id} data={item} isEditable={false} />)
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
          !userSearching && itemsCollection.map((item) => <Item key={item.id} data={item} isEditable={false} />)
        }
      </ItemsArea>
    </HomeContainer>
  );
}
