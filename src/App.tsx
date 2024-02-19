import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { TasksModal } from './components/TasksModal'
import { TaskProvider } from './services/itemService'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TaskProvider> 
        <TasksModal />
      </TaskProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
