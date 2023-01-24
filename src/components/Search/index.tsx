import {
  ButtonSearch,
  Form,
  IconClose,
  IconSearch,
  InputSearch,
} from "./style";

interface SearchProps {
  query: string;
  handleQuery: (query: string) => void;
}

export default function Search({ query, handleQuery }: SearchProps) {
  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <InputSearch
        type="text"
        placeholder="Search items"
        value={query}
        onChange={(event) => handleQuery(event.target.value)}
      />
      <ButtonSearch type="button" onClick={() => query && handleQuery("")}>
        {query ? <IconClose /> : <IconSearch />}
      </ButtonSearch>
    </Form>
  );
}
