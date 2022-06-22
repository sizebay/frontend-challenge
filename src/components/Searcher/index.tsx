import { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineCheck } from "react-icons/ai";
import { SearchState } from "../MainContent";

import { Button, Wrapper } from "./styles";

interface iSearcherProps {
  changeSearchState: (newSearchState: SearchState) => void;
}

const Searcher = ({ changeSearchState }: iSearcherProps) => {
  const [inputValue, setInputValue] = useState("");
  const [doneFilter, setDoneFilter] = useState(false);
  const [pendingFilter, setPendingFilter] = useState(false);

  useEffect(() => {
    changeSearchState({
      searchByText: inputValue,
      filter: doneFilter || pendingFilter,
      filterBy: doneFilter ? "Done" : pendingFilter ? "Pending" : undefined,
    });
  }, [inputValue, doneFilter, pendingFilter]);

  return (
    <Wrapper>
      <div>
        <input
          type="text"
          placeholder="Search items"
          value={inputValue}
          onChange={({ target: { value } }) => setInputValue(value)}
        />
        <button type="button">
          <AiOutlineSearch />
        </button>
      </div>
      <nav>
        <Button
          activated={doneFilter}
          onClick={() => {
            setDoneFilter(!doneFilter);
            setPendingFilter(false);
          }}
        >
          {doneFilter && <AiOutlineCheck />}Done
        </Button>
        <Button
          activated={pendingFilter}
          onClick={() => {
            setPendingFilter(!pendingFilter);
            setDoneFilter(false);
          }}
        >
          {pendingFilter && <AiOutlineCheck />}Pending
        </Button>
      </nav>
    </Wrapper>
  );
};

export default Searcher;
