import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useItem } from '../../contexts/ItemProvider';
import { useSearch } from '../../contexts/SearchProvider';

import Item from '../../components/Item';
import { DoneContainer, CustomItemsArea } from './styles';

export default function Done() {
  const history = useHistory();

  const {
    itemsCollection, setDisableDone,
  } = useItem();
  const {
    foundedItems, userSearching, handleSearching, setSearchBoxInputText,
  } = useSearch();

  const disableFilter = () => {
    history.push('/');
    setDisableDone(true);
  };

  const cleanSearch = () => {
    handleSearching(false);
    setSearchBoxInputText('');
  };

  useEffect(() => {
    document.title = 'Done Items';
  }, []);

  useEffect(() => () => {
    setDisableDone(false);
  }, [setDisableDone]);

  return (
    <DoneContainer>
      <CustomItemsArea>
        {
          userSearching && foundedItems.map((item) => !item.isPending && (
          <Item key={item.id} data={item} isEditable={false} />
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
          !userSearching && itemsCollection.map((item) => !item.isPending && (
          <Item key={item.id} data={item} isEditable={false} />
          ))
        }

        {
          !userSearching && (itemsCollection.filter((item) => !item.isPending).length === 0) && (
            <p>
              There are no items marked as done.
              {' '}
              <span onClick={disableFilter}>Clear the filter here</span>
              {' '}
              to see all items.
            </p>
          )
        }
      </CustomItemsArea>
    </DoneContainer>
  );
}
