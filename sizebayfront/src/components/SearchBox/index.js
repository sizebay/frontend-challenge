import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <nav>
        <Link to="/done">
          <DoneButton
            onClick={handleClickDone}
            status={isClickedDone}
            >
            Done
          </DoneButton>
        </Link>

        <Link to="/pending">
          <PendingButton
            onClick={handleClickPending}
            status={isClickedPending}
            >
            Pending
          </PendingButton>
        </Link>
      </nav>

      <Form>
        <input type="text" name="searchBar" id="" placeholder="Search items" />
      </Form>
    </Container>
  );
}
