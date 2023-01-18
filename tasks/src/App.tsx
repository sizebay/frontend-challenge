import { ThemeProvider } from "styled-components"
import { Tasks } from "./pages/Tasks"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Tasks />
    </ThemeProvider>
  )
}

export default App
