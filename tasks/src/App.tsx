import { ThemeProvider } from "styled-components"
import { ContenxtApplicationProvider } from "./Context/ContextApplication"
import { Tasks } from "./pages/Tasks"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <ContenxtApplicationProvider>
          <Tasks />
        </ContenxtApplicationProvider>
    </ThemeProvider>
  )
}

export default App
