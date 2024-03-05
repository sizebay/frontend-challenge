import { Button } from "../Button/button";
import { Input } from "../Input/input";
import * as S from "./list.style";

export const List = () => {
  return (
    <S.ListContainer>
      <S.FiltersContainer>
        <S.ButtonsContainer>
          <Button>Done</Button>
          <Button>Pending</Button>
        </S.ButtonsContainer>
        <Input width="450px" height="40px" placeholder="Pesquisar"></Input>
      </S.FiltersContainer>
      <S.ItemsContainer>
        <S.ItemBox>
          <S.InputAddItem placeholder="Adicionar Item" />
          <S.AddButton>ADD</S.AddButton>
        </S.ItemBox>
      </S.ItemsContainer>
    </S.ListContainer>
  );
};
