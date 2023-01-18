import StatusButton from "./Components/StatusButton/StatusButton"
import { GlobalStyle } from "./GlobalStyle/GlobalStyle"
import SearchInput from './Components/SearchInput/SearchInput'

function App() {

  return (<>
  <GlobalStyle/>
   <div>
    <header>Calendar</header>
    <div>Progress bar</div>
    <div>
    <aside>
      <StatusButton status='done'/>
      <StatusButton status='pending'/>
    </aside>
    <SearchInput type="search" placeholder="Search items" value={'hello world'} />
    </div>
    <div>
      <p>Add new items
        <button>+</button>
      </p>
    </div>
    </div>
  </>
   
  )
}

export default App
