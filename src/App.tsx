import { Modal } from "./components/Modal/Modal"
import { ThemeProvider } from "styled-components"
import  defaultTheme from "./styles/themes/default"
import { GlobalStyle } from "./styles/themes/global"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Modal />
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
