import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { NotFoundContainer } from './styles';

export default function PageNotFound() {

  useEffect(() => {
    document.title = 'Page not found'
  }, []);

  return (
    <NotFoundContainer>
      <h1>Page not found ☹️</h1>
      <Link to="/">
        Click here to back to the home
      </Link>
    </NotFoundContainer>
  );
}
