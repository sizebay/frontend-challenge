/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import { useEffect } from 'react';

import { useItem } from '../../contexts/ItemProvider';
import { useSearch } from '../../contexts/SearchProvider';

import Item from '../../components/Item';

import { PendingContainer, CustomItemsArea } from './styles';
import AddingBar from '../../components/AddingBar';

export default function Pending() {
  const { itemsCollection } = useItem();
  const {
    foundedItems, userSearching, handleSearching, setSearchBoxInputText,
  } = useSearch();

  useEffect(() => {
    document.title = 'Pending Items';
  }, []);

  const cleanSearch = () => {
    handleSearching(false);
    setSearchBoxInputText('');
  };

  // Quando chegar NESTA página, ele dee transformar todos os Itens em EDITAVEIS

  // Em PENDING, é importante salientar que devemos filtrar sempre pelos itens que estão como Pending TRUE
  // Quando estou utilizando a caixa de busca
  // Quando estou utilizando a caixa de busca e não tenho resultados, limpar o filtro da caixa e exibir todos os itens
  // Quando não estou utilizando a caixa de busca, verificando que seja pendente

  return (
    <PendingContainer>
      <AddingBar />

      <CustomItemsArea>
        {
          userSearching && foundedItems.map((item) => item.isPending && <Item key={item.id} data={item} />)
        }

        {
          userSearching && (foundedItems.length === 0) && (
            <p id="searchAndClean">
              Your search found no results.
              {' '}
              <span onClick={cleanSearch}>Clean the search here</span>
              {' '}
              to see all items.
            </p>
          )
        }

        {
          !userSearching && itemsCollection.map((item) => item.isPending && <Item key={item.id} data={item} />)
        }
      </CustomItemsArea>
    </PendingContainer>
  );
}
