import React, { useEffect } from 'react';
import { useItem } from '../../contexts/item';
import { ItemsArea } from '../../components/Item/styles';
import ItemAddBar from '../../components/ItemAddBar';
import Item from '../../components/Item';
import { HomeContainer } from './styles';

export default function Home() {
  const { itemsCollection, isSearch, searchText } = useItem();

  useEffect(() => {
    document.title = 'Home';
  });

  return (
    <HomeContainer>
      <ItemAddBar />

      <ItemsArea>
        {isSearch ? (
          (itemsCollection.filter(item => item.content.toLowerCase().includes(searchText.toLowerCase()))).map((item, index) => (
            <Item key={index} data={item} />
          ))
        ) : (
          itemsCollection.map((item, index) => (
            <Item key={index} data={item} />
          ))
        )}
      </ItemsArea>
    </HomeContainer>
  );
}
