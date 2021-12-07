import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function PageNotFound() {

  useEffect(() => {
    document.title = 'Page not found'
  })

  return (
    <Container>
      <h1>Page not found ☹️</h1>
      <Link to="/">
        Click here to back to the home
      </Link>
    </Container>
  );
}
