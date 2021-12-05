import React from 'react';

import { useItem } from '../../contexts/item';

import { Container, Form } from './styles';

export default function SearchBox() {
  const { searchText, handleSearch } = useItem();

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
