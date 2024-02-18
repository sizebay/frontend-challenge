import { Modal } from "./components/Modal/Modal"
import { ThemeProvider } from "styled-components"
import  defaultTheme from "./styles/themes/default"
import { GlobalStyle } from "./styles/themes/global"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Modal />
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
