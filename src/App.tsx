import { ThemeProvider } from "styled-components";
import { TaskProvider } from "./context/TaskContext";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

function App() {
  return (
    <TaskProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </TaskProvider>
  );
}

export default App;
