/* eslint-disable no-mixed-operators */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { useItem } from '../../contexts/item';

import Item from '../../components/Item';
import { ItemsArea } from '../../components/Item/styles';

export default function Pending() {
  /*
    SITUAÇÕES QUE SERÁ RENDERIZADO NOVAMENTE:
    - Ao acessar a página PENDING.
    - Ao digitar qualquer caractere na barra da busca
    - Ao finalizar um ITEM na aba de Pending

    SITUAÇṌES QUE NÃO SERÁ RENDERIZADO:
    - Ao trocar para página de HOME ou DONE
  */

  const { itemsCollection, isSearch, foundedCollection } = useItem();
  const [filteredCollection, setFilteredCollection] = useState([]);

  useEffect(() => {
    document.title = 'Pending Items';
    console.log('PENDING renderizado')
  });

  useEffect(() => {
    const filtered = itemsCollection.filter(item => item.isPending);
    setFilteredCollection(filtered);
  }, [])

  return (
    <ItemsArea>
      {isSearch ? (
        foundedCollection.map((item, index) => (
          <Item key={index} data={item} />
        ))
      ) : (
        filteredCollection.map((item, index) => (
          <Item key={index} data={item} />
        ))
      )}
    </ItemsArea>
  );
}
