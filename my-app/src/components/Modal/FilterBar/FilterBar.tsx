import * as S from "./FilterBar.styles";

import { useTaskContext } from "hooks/useTaskContext";
import { ModalButton } from "../Button";
import { ModalInputText } from "../Inputs";
import { TaskStatus } from "types/taskStatus.enum";

import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const ModalFilterBar = () => {
  const { currentStatus, setCurrentStatus, searchTask, setSearchTask, removeFilter } = useTaskContext();

  const TaskStatusValues = Object.values(TaskStatus);

  return (
    <S.Container>

      <S.FilterButtonsBox>
        {TaskStatusValues.map((status, index) => (
          <li key={index}>
            <ModalButton
              onClick={() => setCurrentStatus(status)}
              $clicked={currentStatus === status}
              $filterButton
              icon={currentStatus === status ? <FaCheck /> : undefined}
              data-testid='current-status'
            >
              {status}
            </ModalButton>
          </li>
        ))}
      </S.FilterButtonsBox>

      <S.InputBox>

        <ModalInputText
          type="text"
          placeholder="Search items..."
          value={searchTask}
          onChange={(e) => setSearchTask(e.target.value)}
          aria-label="Search"
          data-testid='search-task'
        />

        <ModalButton
          icon={searchTask ? <IoMdClose /> : <FaSearch />}
          onClick={() => searchTask && removeFilter()}
          $searchButton
          data-testid='remove-filter'
        />

      </S.InputBox>

    </S.Container>
  )
}