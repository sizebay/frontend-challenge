import { Fragment, useCallback, useMemo, useState } from "react";
import { Button } from "../Button/button";
import { InputFilter } from "../InputFilter/inputFilter";
import Check from "../../assets/check-filter.svg?react";
import { FilterType, ListType } from "./list.types";
import Search from "../../assets/search.svg?react";
import { InputAddTask } from "../InputAddTask/inputAddTask";
import { InputEditTask } from "../InputEditTask/inputEditTask";
import { ProgressiveBar } from "../ProgressiveBar/progressiveBar";
import * as S from "./list.style";
import { LottieAnimation } from "../LottieAnimation/lottieAnimation";

export const List = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState<ListType[]>([]);
  const [filter, setFilter] = useState<FilterType>("none");
  const [filterInput, setFilterInput] = useState("");

  const calculatePercentageProgress = useMemo(() => {
    const tasksDone = list.filter(
      (element) => element.status === "done"
    ).length;
    const totalTasks = list.length;
    if (totalTasks === 0 || tasksDone === 0) return 0;
    return (tasksDone / totalTasks) * 100;
  }, [list]);

  const listAfterFilters = useCallback(() => {
    if (filter !== "none") {
      const tasksSearchFiltered = filterInput
        ? list.filter((element) =>
            element.task.toLowerCase().includes(filterInput.toLowerCase())
          )
        : list;

      return tasksSearchFiltered.filter((element) => element.status === filter);
    }
    if (filter === "none" && filterInput !== "") {
      return list.filter((element) =>
        element.task.toLowerCase().includes(filterInput.toLowerCase())
      );
    }

    return list;
  }, [list, filter, filterInput]);

  const changeFilter = (filterButton: FilterType) => {
    setFilter((prevValue) => {
      if (prevValue === filterButton) {
        return "none";
      }
      return filterButton;
    });
  };

  const addItem = () => {
    setList((prevList) => [
      {
        id: prevList.length + 1 * Math.random(),
        task: item,
        status: "pending",
      },
      ...prevList,
    ]);
    setItem("");
  };

  const doneItem = (id: number) => {
    const newList: ListType[] = list.map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          task: item.task,
          status: "done",
        };
      }
      return item;
    });
    setList([...newList]);
  };

  const excludeThisItem = (id: number) => {
    const index = list.findIndex((item) => item.id === id);
    list.splice(index, 1);
    setList([...list]);
  };

  const thisItemHasDone = (id: number) => {
    const hasDone = list.some(
      (item) => item.id === id && item.status === "done"
    );
    return hasDone;
  };

  return (
    <S.ListContainer>
      <ProgressiveBar value={calculatePercentageProgress} />
      <S.FiltersContainer>
        <S.ButtonsContainer>
          <Button
            onClick={() => changeFilter("done")}
            $clicked={filter === "done"}
            $filterButton
            icon={filter === "done" ? <Check /> : undefined}
          >
            Done
          </Button>
          <Button
            $clicked={filter === "pending"}
            onClick={() => changeFilter("pending")}
            $filterButton
            icon={filter === "pending" ? <Check /> : undefined}
          >
            Pending
          </Button>
        </S.ButtonsContainer>
        <InputFilter
          width="450px"
          height="40px"
          onChange={(e) => setFilterInput(e.target.value)}
          value={filterInput}
          placeholder="Pesquisar"
          elementInsideInput={<Search />}
        />
      </S.FiltersContainer>
      <InputAddTask
        onChange={(e) => setItem(e.target.value)}
        value={item}
        placeholder="Adicionar Item"
        disabled={item === ""}
        onClick={addItem}
      />
      <S.ItemsContainer>
        {listAfterFilters()?.map((item) => (
          <Fragment key={item.id + Math.random()}>
            <InputEditTask
              $hasDone={thisItemHasDone(item.id)}
              onClickCheck={() => doneItem(item.id)}
              onClickMinus={() => excludeThisItem(item.id)}
              height="40px"
              readOnly
              value={item.task}
            />
          </Fragment>
        ))}
      </S.ItemsContainer>
    </S.ListContainer>
  );
};
