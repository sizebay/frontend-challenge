import { DayOfWeek } from "./components/DayOfWeek";
import { ProgressBar } from "./components/ProgressBar";
import { SearchTask } from "./components/SearchTask";
import { Tabs } from "./components/Tabs";
import { GridContainer, HeaderContainer } from "./styles";

export function Header(){
  return (
    <HeaderContainer>
      <DayOfWeek />
      <ProgressBar />
      <GridContainer>
        <Tabs />
        <SearchTask />
      </GridContainer>
    </HeaderContainer>
  )
}