/* eslint-disable no-mixed-operators */
import React, { useContext } from 'react';

import { itemContext } from '../../contexts/ItemContext';

import ItemBox from '../../components/ItemBox';
import ItemAddBar from '../../components/ItemAddBar';

export default function Home() {
  const { isSearch } = useContext(itemContext);
  console.log(isSearch);

  return (
    <>
      {!isSearch && (
        <>
          <ItemAddBar />
          <ItemBox />
        </>
      ) || (
        <>
          {/* <ItemBox /> */}
          <h1>buscando</h1>
        </>
      )}
    </>
  );
}
