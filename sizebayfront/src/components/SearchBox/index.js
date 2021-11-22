import React, { useState } from 'react';

import { Container, DoneButton, Form, PendingButton } from './styles';

export default function SearchBox() {
  const [isClickedDone, setIsClickedDone] = useState(false);
  const [isClickedPending, setIsClickedPending] = useState(false);

  function handleClickDone() {
    setIsClickedDone(prevState => prevState ? false : true);
  }

  function handleClickPending() {
    setIsClickedPending(prevState => prevState ? false : true);
  }

  return (
    <Container>
      <DoneButton
        onClick={handleClickDone}
        status={isClickedDone}
        >
        Done
      </DoneButton>

      <PendingButton
        onClick={handleClickPending}
        status={isClickedPending}
      >
        Pending
      </PendingButton>

      <Form>
        <input type="text" name="searchBar" id="" placeholder="Search items" />
      </Form>
    </Container>
  );
}
