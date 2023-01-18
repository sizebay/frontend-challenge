import { Check } from "phosphor-react";
import { TabsContainer, TabOption, TabsOptionsContainer, TabContent } from "./styles";


export function Tabs(){
  return (
    <TabsContainer>
      <TabsOptionsContainer>
        <TabOption value="done"><Check size={20} />Done</TabOption>
        <TabOption value="pending"><Check size={20} />Pending</TabOption>
      </TabsOptionsContainer>
      <TabContent value="done">
        <h1>Done</h1>
      </TabContent>
      <TabContent value="pending">
        <h1>Pending</h1>
      </TabContent>
    </TabsContainer>
  )
}