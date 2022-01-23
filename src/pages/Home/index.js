import React, { useEffect } from 'react';

import AddingBar from '../../components/AddingBar';
import ItemsDisplayArea from '../../components/ItemsDisplayArea';

import { HomeContainer } from './styles';

export default function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <HomeContainer>
      <AddingBar />
      <ItemsDisplayArea />
    </HomeContainer>
  );
}
