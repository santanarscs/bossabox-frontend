import React from "react";
import GlobalStyles from "./styles/global";
import { Container } from "./styles";
import Tools from "./components/tools";
function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Tools />
      </Container>
    </>
  );
}

export default App;
