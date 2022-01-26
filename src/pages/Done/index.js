/* eslint-disable */
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useItem } from '../../contexts/ItemProvider';

import Item from '../../components/Item';

import { DoneContainer, CustomItemsArea } from './styles';

export default function Done() {
  const history = useHistory();

  const {
    itemsCollection, isSearch, searchText, setDisableDone,
  } = useItem();

  const disableFilter = () => {
    history.push('/');
    setDisableDone(true);
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
        {!(itemsCollection.filter((item) => item.isPending === false)).length ? (
          <p>
            There are no items marked as done.
            {' '}
            <span onClick={disableFilter}>Clear the filter here</span>
            {' '}
            to see all items.
          </p>
        ) : isSearch ? (
          ((itemsCollection.filter((item) => item.isPending === false)).filter((item) => item.content.toLowerCase().includes(searchText.toLowerCase()))).map((item, index) => (
            <Item key={index} data={item} />
          ))
        ) : (
          (itemsCollection.filter((item) => item.isPending === false)).map((item, index) => (
            <Item key={index} data={item} />
          ))
        )}
      </CustomItemsArea>
    </DoneContainer>
  );
}
