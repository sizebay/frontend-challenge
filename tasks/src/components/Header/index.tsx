import { DayOfWeek } from "./components/DayOfWeek";
import { ProgressBar } from "./components/ProgressBar";
import { HeaderContainer } from "./styles";

export function Header(){
  return (
    <HeaderContainer>
      <DayOfWeek />
      <ProgressBar />
    </HeaderContainer>
  )
}