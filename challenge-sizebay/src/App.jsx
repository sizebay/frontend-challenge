import StatusButton from "./Components/StatusButton/StatusButton";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import SearchInput from "./Components/SearchInput/SearchInput";
import {
  Modal,
  ModalContent,
  MidModal,
  StatusButtons,
  } from "./style";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import Calendar from "./Components/Calendar/Calendar";
import AddNewItem from './Components/AddNewItem/AddNewItem'
import ToDoList from "./Components/ToDoList/ToDoList";
function App() {
  return (
    <>
      <GlobalStyle />
      <Modal>
        <ModalContent>
          <Calendar/>
          <ProgressBar />
          <MidModal>
            <StatusButtons>
              <StatusButton status="done" />
              <StatusButton status="pending" />
            </StatusButtons>
            <SearchInput />
          </MidModal>
          <AddNewItem/>
         <ToDoList/>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
