import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import {
  ButtonSearch,
  Form,
  IconClose,
  IconSearch,
  InputSearch,
} from "./style";

export default function Search() {
  const { query, handleQuery } = useContext(TaskContext);
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
