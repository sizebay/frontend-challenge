/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useItem } from '../../contexts/ItemProvider';
import { useSearch } from '../../contexts/SearchProvider';

import Item from '../../components/Item';

import { DoneContainer, CustomItemsArea } from './styles';

export default function Done() {
  const history = useHistory();

  const {
    itemsCollection, setDisableDone,
  } = useItem();
  const {
    foundedItems, userSearching, handleSearching, setSearchBoxInputText,
  } = useSearch();

  const disableFilter = () => {
    history.push('/');
    setDisableDone(true);
  };

  const cleanSearch = () => {
    handleSearching(false);
    setSearchBoxInputText('');
  };

  useEffect(() => {
    document.title = 'Done Items';
  }, []);

  useEffect(() => () => {
    setDisableDone(false);
  }, [setDisableDone]);

  // Em DONE, é importante salientar que devemos filtrar sempre pelos itens que estão como Pending FALSE
  // Quando estou utilizando a caixa de busca
  // Quando estou utilizando a caixa de busca e não tenho resultados, limpar o filtro da caixa e exibir todos os itens
  // Quando não estou utilizando a caixa de busca, verificando que seja não pendente
  // Quando não estou utilizando a caixa de busca, verificando que seja não pendente e não tiver nenhum elemento retornado, retornar mensagem que não há itens marcados como done

  // console.log(itemsCollection);

  return (
    <DoneContainer>
      <CustomItemsArea>
        {
          userSearching && foundedItems.map((item) => !item.isPending && <Item key={item.id} data={item} isEditable={false} />)
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
          !userSearching && itemsCollection.map((item) => !item.isPending && <Item key={item.id} data={item} isEditable={false} />)
        }

        {
          !userSearching && (itemsCollection.filter((item) => !item.isPending).length === 0) && (
            <p>
              There are no items marked as done.
              {' '}
              <span onClick={disableFilter}>Clear the filter here</span>
              {' '}
              to see all items.
            </p>
          )
        }
      </CustomItemsArea>
    </DoneContainer>
  );
}
