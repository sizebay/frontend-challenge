import StatusButton from "./Components/StatusButton/StatusButton";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import SearchInput from "./Components/SearchInput/SearchInput";
import { Modal, ModalContent, MidModal } from "./style";
import Calendar from "./Components/Calendar/Calendar";
import AddNewItem from "./Components/AddNewItem/AddNewItem";
import ToDoList from "./Components/ToDoList/ToDoList";
import GlobalState from "./Contexts/GlobalState";

function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Modal>
        <ModalContent>
          <Calendar />
          <MidModal>
            <StatusButton />
            <SearchInput />
          </MidModal>
          <AddNewItem />
          <ToDoList />
        </ModalContent>
      </Modal>
    </GlobalState>
  );
}

export default App;
