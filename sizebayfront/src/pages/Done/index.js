import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useItem } from '../../contexts/item';
import Item from '../../components/Item';
import { ItemsArea } from '../../components/Item/styles';
import { Container } from './styles';

export default function Done() {
  const history = useHistory();

  const { itemsCollection, isSearch, searchText, setDisableDone } = useItem();

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
  }, [setDisableDone])

  return (
    <Container>
      <ItemsArea>
        {!(itemsCollection.filter(item => item.isPending === false)).length ? (
          <p>
            There are no items marked as done. <span onClick={disableFilter}>Clear the filter here</span> to see all items.
          </p>
        ) : isSearch ? (
          ((itemsCollection.filter(item => item.isPending === false)).filter(item => item.content.toLowerCase().includes(searchText.toLowerCase()))).map((item, index) => (
            <Item key={index} data={item} />
          ))
        ) : (
          (itemsCollection.filter(item => item.isPending === false)).map((item, index) => (
            <Item key={index} data={item} />
          ))
        )}
      </ItemsArea>
    </Container>
  );
}
