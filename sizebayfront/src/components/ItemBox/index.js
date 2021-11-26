import React, { useContext, useEffect } from 'react';

import { itemContext } from '../../contexts/ItemContext';

import Item from '../Item';
import { ItemsArea } from './styles';

export default function ItemBox() {
  const { itemsCollection } = useContext(itemContext);

  // const filteredCollection = itemsCollection.filter(item => item.isPending === true);

  return (
    <ItemsArea>
      {itemsCollection.map((item, index) => {
        if (item.isPending) {
          return (
            <Item key={index} data={item} />
          )
        }
      }
      )}
    </ItemsArea>
  );
}
