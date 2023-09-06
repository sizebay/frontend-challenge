import { ThemeProvider } from 'styled-components'
import Header from './components/header'
import StatusBar from './components/statusBar'
import RoutesComponent from './routes'
import { TaskContextProvider } from './services/taskServices/TaskContext'
import { ContainerGlobal } from './styles/GlobalStyle'
import { GlobalStyle } from './styles/GlobalStyle'
import ToolsBar from './components/toolsBar'
import { ThemeContext, UseThemeContext } from './services/themeServices/themeContext'

const App = () => {

  const { theme, toggleTheme } = UseThemeContext()

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ContainerGlobal>
          <TaskContextProvider>
            <ToolsBar/>
            <Header/>
            <StatusBar/>
            <RoutesComponent/>
            <GlobalStyle/>
          </TaskContextProvider>
        </ContainerGlobal>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default App
