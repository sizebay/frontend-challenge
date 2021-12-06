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

  const { itemsCollection, isSearch, searchText } = useItem();
  const [filteredCollection, setFilteredCollection] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);

  useEffect(() => {
    document.title = 'Pending Items';
  });

  useEffect(() => {
    const filtered = itemsCollection.filter(item => item.isPending);
    setFilteredCollection(filtered);
  }, [])

  useEffect(() => {
    const foundItemsArray = filteredCollection.filter(itemCollection => itemCollection.content.toLowerCase().includes(searchText.toLowerCase()));

    setSearchedItems(foundItemsArray);
  }, [searchText])

  return (
    <ItemsArea>
      {isSearch ? (
        ((itemsCollection.filter(item => item.isPending)).filter(item => item.content.toLowerCase().includes(searchText.toLowerCase()))).map((item, index) => (
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
