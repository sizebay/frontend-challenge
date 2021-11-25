import React from 'react';

import { Container } from './styles';

export default function Done() {
  return (
    <Container>
      <p>
        There are no items marked as done. <a>Clear the filter here</a> to see all items.
      </p>
    </Container>
  );
}
