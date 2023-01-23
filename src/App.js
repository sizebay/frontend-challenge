import styled from 'styled-components'

// Components
import Date from './components/Date'
import ProgressBar from './components/ProgressBar'
import Search from './components/Search'
import AddItem from './components/AddItem'
import ItemsList from './components/ItemsList'

// Context
import { ItemsProvider } from './context/ItemsContext'

const AppContainer = styled.div`
  background-color: #FFF;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  width: 680px;
  min-height: 530px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin: 215px 0;
  padding: 60px;

  @media (max-width: 992px) {
    width: calc(100% - 64px);
    min-height: calc(100% - 64px);
    margin: 16px;
    left: 0;
    transform: none;
    position: absolute;
    padding: 16px;
  }
`

function App() {
  return (

    <AppContainer>

      <ItemsProvider>

        <Date />
        <ProgressBar />
        <Search />
        <AddItem />
        <ItemsList />
        
      </ItemsProvider>

    </AppContainer>

  );
}

export default App;
