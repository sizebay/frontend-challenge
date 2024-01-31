import React from "react";
import { Container, Header } from "./styles";
import Home from "./pages/Home";
import { GlobalStyle, ThemeProvider } from "./styles/globalStyles";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container>
          <Header>
            <Home />
          </Header>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
