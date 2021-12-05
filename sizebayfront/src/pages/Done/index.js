/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-mixed-operators */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import { useItem } from '../../contexts/item';

import Item from '../../components/Item';
import { ItemsArea } from '../../components/Item/styles';

import { Container } from './styles';

export default function Done() {
  const history = useHistory();
  const { itemsCollection, isSearch, searchText, setDisableDone, foundedCollection, setDoneTasks } = useItem();
  const filteredCollection = itemsCollection.filter(item => item.isPending === false);

  setDoneTasks(filteredCollection.length);

  const disableFilter = () => {
    history.push('/');
    setDisableDone(true);
  };

  useEffect(() => {
    document.title = 'Done Items';
  });

  useEffect(() => {
    return () => {
      setDisableDone(false);
    }
  }, [searchText]);

  return (
    <Container>
      <ItemsArea>
        {!filteredCollection.length && (
          <p>
            There are no items marked as done. <span onClick={disableFilter}>Clear the filter here</span> to see all items.
          </p>
        ) ||
          isSearch && (
            foundedCollection.map((item, index) => (
              <Item key={index} data={item} />
            ))
          )
          ||
          (
            filteredCollection.map((item, index) => (
              <Item key={index} data={item} />
            ))
          )
        }
      </ItemsArea>
    </Container>
  );
}
