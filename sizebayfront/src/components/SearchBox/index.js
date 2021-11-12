import React from 'react';

import { Container, DoneButton, Form, PendingButton } from './styles';

export default function SearchBox() {
  return (
    <Container>
      <DoneButton>
        Clicar
      </DoneButton>
      <PendingButton onClick={() => console.log('clicado')}>
        Pending
      </PendingButton>

      <Form>
        <input type="text" name="searchBar" id="" placeholder="Search items" />
      </Form>
    </Container>
  );
}
