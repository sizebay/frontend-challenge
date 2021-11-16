import React from 'react';

import { Container, DoneButton, Form, PendingButton } from './styles';

export default function SearchBox() {
  return (
    <Container>
      <DoneButton>
        Done
      </DoneButton>

      <PendingButton
        onClick={e => console.log(e)}
      >
        Pending
      </PendingButton>

      <Form>
        <input type="text" name="searchBar" id="" placeholder="Search items" />
      </Form>
    </Container>
  );
}
