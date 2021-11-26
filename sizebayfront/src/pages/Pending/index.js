import React, { useContext } from 'react';

import { itemContext } from '../../contexts/ItemContext';

import Item from '../../components/Item';
import { ItemsArea } from '../../components/ItemBox/styles';


export default function Pending() {
  const { itemsCollection } = useContext(itemContext);
  const filteredCollection = itemsCollection.filter(item => item.isPending === true);

  return (
    <ItemsArea>
      {filteredCollection.map((item, index) => (
          <Item key={index} data={item} />
        ))}
    </ItemsArea>
  );
}
