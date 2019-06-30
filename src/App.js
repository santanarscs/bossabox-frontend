import React from "react";

import { Provider } from "react-redux";

import GlobalStyles from "./styles/global";
import { Container } from "./styles";

import Tools from "./components/tools";

import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <>
        <GlobalStyles />
        <Container>
          <Tools />
        </Container>
      </>
    </Provider>
  );
}

export default App;
