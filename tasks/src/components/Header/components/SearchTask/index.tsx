import { MagnifyingGlass } from "phosphor-react";
import { SearchContainer } from "./styles";


export function SearchTask(){
  return(
    <SearchContainer>
      <input type="text" placeholder="Search Items" />
      <MagnifyingGlass size={25} />
    </SearchContainer>
  )
}