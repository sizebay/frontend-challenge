import React, { useContext } from 'react';

import { itemContext } from '../../contexts/ItemContext';

import Item from '../../components/Item';
import { ItemsArea } from '../../components/ItemBox/styles';

import { Container } from './styles';

export default function Done() {
  const { itemsCollection, handleEmptyFilters } = useContext(itemContext);

  const filteredCollection = itemsCollection.filter(item => item.isPending === false);

  return (
    <Container>
      <ItemsArea>
        {filteredCollection.length
          ?
          filteredCollection.map((item, index) => (
            <Item key={index} data={item} />
          ))
          :
          <p>
            There are no items marked as done. <a>Clear the filter here</a> to see all items.
          </p>
        }
      </ItemsArea>

    </Container>
  );
}
