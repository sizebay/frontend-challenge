import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { itemContext } from '../../contexts/ItemContext';

import { Date } from './Date';
import { ProgressBar } from './ProgressBar';

export default function Header() {
  const { itemsCollection } = useContext(itemContext);

  return (
    <>
      <Date>
        <Link to='/'>
          <h1>07</h1>
        </Link>
        <div>
          <h2>Jul</h2>
          <h3>2021</h3>
        </div>
        <h2>Wednesday</h2>
      </Date>

      <ProgressBar itemQuantity={itemsCollection}>
        <div id="filler"></div>
      </ProgressBar>
    </>
  );
}
