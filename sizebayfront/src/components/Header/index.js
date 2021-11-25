import React from 'react';
import { Link } from 'react-router-dom';

import { Date } from './Date';
import { ProgressBar } from './ProgressBar';

export default function Header() {
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
      <ProgressBar>
        <div id="filler"></div>
      </ProgressBar>
    </>
  );
}
