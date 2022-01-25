import React, { useEffect } from 'react';

import { useItem } from '../../contexts/ItemProvider';
import { useSearch } from '../../contexts/SearchProvider';

import AddingBar from '../../components/AddingBar';
import Item from '../../components/Item';

import { HomeContainer } from './styles';
import { ItemsArea } from '../../styles/ItemsArea';

export default function Home() {
  const { itemsCollection } = useItem();
  const { foundedItems, userSearching, handleSearching, setSearchBoxInputText } = useSearch();

  useEffect(() => {
    document.title = 'Home';
  }, []);

  const cleanSearch = () => {
    handleSearching(false);
    setSearchBoxInputText('');
  }

  // Quando estou utilizando a caixa de busca
  // Quando estou utilizando a caixa de busca e não tenho resultados, limpar o filtro da caixa e exibir todos os itens
  // Quando não estou utilizando a caixa de busca
  return (
    <HomeContainer>
      <AddingBar />
      <ItemsArea>
        {
          userSearching && foundedItems.map((item, index) => <Item key={index} data={item} />)
        }

        {
          userSearching && (foundedItems.length === 0) && (
            <p id="searchAndClean">
              Your search found no results. <span onClick={cleanSearch}>Clean the search here</span> to see all items.
            </p>
          )
        }

        {
          !userSearching && itemsCollection.map((item, index) => <Item key={index} data={item} />)
        }
      </ItemsArea>
    </HomeContainer>
  );
}
