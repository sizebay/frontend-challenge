import { FaCheck } from "react-icons/fa6";
import styled from "styled-components";
import { useTasksContext } from "../../context/TasksContext";
import { FilterType } from "../../types/ITasks";

const ButtonFilter = styled.button<ButtonProps>`
  padding: 8px 16px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#F7F7F8" : "#FFFFFF")};
  color: ${(props) => (props.active ? "#4DA6B3" : "#848484")};
  border: 1px solid ${(props) => (props.active ? "#4DA6B3" : "#DBDBDB")};
  border-radius: 20px;
  outline: none;
  display: inline-flex;
  gap: 5px;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  gap: 10px;
  bottom: 0;

  @media screen and (max-width: 768px) {
    order: 2 !important;
    justify-content: right;
    width: 100%;
  }
`;

interface ButtonProps {
  active: boolean;
}

const FilterButtons = () => {
  const { activeFilter, setActiveFilter } = useTasksContext();

  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  return (
    <FilterContainer>
      <ButtonFilter
        active={activeFilter === "done"}
        onClick={() => handleFilterClick("done")}
      >
        {activeFilter === "done" ? <FaCheck /> : null}
        Done
      </ButtonFilter>
      <ButtonFilter
        active={activeFilter === "pending"}
        onClick={() => handleFilterClick("pending")}
      >
        {activeFilter === "pending" ? <FaCheck /> : null}
        Pending
      </ButtonFilter>
    </FilterContainer>
  );
};
export default FilterButtons;
