import { Fragment, useState } from "react";
import { Button } from "../Button/button";
import { InputFilter } from "../InputFilter/inputFilter";
import * as S from "./list.style";
import { ListType } from "./list.types";
import Search from "../../assets/search.svg?react";
import Plus from "../../assets/plus.svg?react";
import { InputAddTask } from "../InputAddTask/inputAddTask";
import { InputEditTask } from "../InputEditTask/inputEditTask";

export const List = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState<ListType[]>([]);

  const addItem = () => {
    setList((prevList) =>
      prevList?.length > 0
        ? [{ id: prevList.length + 1, task: item }, ...prevList]
        : [{ id: prevList.length + 1, task: item }]
    );
    setItem("");
  };

  return (
    <S.ListContainer>
      <S.FiltersContainer>
        <S.ButtonsContainer>
          <Button $filterButton>Done</Button>
          <Button $filterButton>Pending</Button>
        </S.ButtonsContainer>
        <InputFilter
          width="450px"
          height="40px"
          placeholder="Pesquisar"
          elementInsideInput={<Search />}
        />
      </S.FiltersContainer>
      <S.ItemsContainer>
        <InputAddTask
          onChange={(e) => setItem(e.target.value)}
          value={item}
          placeholder="Adicionar Item"
          disabled={item === ""}
          onClick={addItem}
        />
        {list?.map((item) => (
          <Fragment key={item.id}>
            <InputEditTask height="40px" readOnly value={item.task} />
          </Fragment>
        ))}
      </S.ItemsContainer>
    </S.ListContainer>
  );
};
