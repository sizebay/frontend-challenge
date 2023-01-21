import { Check } from "phosphor-react";
import { useContext } from "react";
import { TabsContainer, TabOption, TabsOptionsContainer, TabContent } from "./styles";
import { ContenxtApplication } from '../../Context/ContextApplication';


export function Tabs(){
  const { tasksActive } = useContext(ContenxtApplication);

  function handleDoneActive(){
    tasksActive('done');
  }
  function handlePendingActive(){
    tasksActive('pending');
  }
  return (
    <TabsContainer>
      <TabsOptionsContainer>
        <TabOption value="done" onClick={() => handleDoneActive()}><Check size={20} />Done</TabOption>
        <TabOption value="pending" onClick={() => handlePendingActive()}><Check size={20} />Pending</TabOption>
      </TabsOptionsContainer>
    </TabsContainer>
  )
}