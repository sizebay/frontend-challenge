import React from 'react';

import { useItem } from '../../contexts/item';

import { Container, Form } from './styles';

export default function SearchBox() {
  const { handleIsSearch, searchText, handleSearchText } = useItem();

  function handleSearch(e) {
    handleSearchText(e.target.value);

    if (e.target.value) {
      handleIsSearch(true);
    } else {
      handleIsSearch(false);
    }
  }

  return (
    <Container>
      <Form>
        <input
          type="text"
          name="searchBar"
          placeholder="Search items"
          value={searchText}
          onChange={e => handleSearch(e)}
        />
      </Form>
    </Container>
  );
}
