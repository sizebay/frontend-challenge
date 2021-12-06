import React, { useEffect } from 'react';
import { useItem } from '../../contexts/item';
import { ItemsArea } from '../../components/Item/styles';

import ItemAddBar from '../../components/ItemAddBar';
import Item from '../../components/Item';

import { HomeContainer } from './styles';

export default function Home() {
  /*
    SITUAÇÕES QUE SERÁ RENDERIZADO NOVAMENTE:
    - Ao acessar novamente a HOME
    - Ao digitar qualquer caractere na barra da busca
    - Ao adicionar um novo ITEM
    - Ao eliminar um ITEM

    SITUAÇṌES QUE NÃO SERÁ RENDERIZADO:
    - Ao trocar para página de PENDING ou DONE
    - Ao concluir um ITEM [trocar isto!!!]
  */

  const { itemsCollection, isSearch, foundedCollection, handleDoneTasks } = useItem();


  useEffect(() => {
    document.title = 'Home';
  });

  useEffect(() => {
    // console.log('HOME renderizada')

    const doneCollection = itemsCollection.filter(item => item.isPending === false);
    handleDoneTasks(doneCollection.length);
  })

  return (
    <HomeContainer>
      <ItemAddBar />

      <ItemsArea>
        {isSearch ? (
          foundedCollection.map((item, index) => (
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
