import { useSearch } from '../../contexts/SearchProvider';

import { Container, Form } from './styles';

export default function SearchBox() {
  const { searchItems, handleSearching, cleanUserSearching, searchBoxInputText, setSearchBoxInputText } = useSearch();

  console.log(cleanUserSearching)

  const handleSearch = event => {
    if (cleanUserSearching) {
      setSearchBoxInputText('');
    }

    handleSearching(() => {
      if (event.target.value === '') {
        return false
      }
      return true;
    });
    searchItems(event.target.value);
    setSearchBoxInputText(event.target.value);
  }

  return (
    <Container>
      <Form>
        <input
          type="text"
          name="searchBar"
          placeholder="Search items"
          value={searchBoxInputText}
          onChange={handleSearch}
        />
      </Form>
    </Container>
  );
}
