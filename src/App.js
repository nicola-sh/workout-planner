import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Main from "./pages/Main";
import NavBar from "./components/NavBar";

const AppContainer = styled.div`
  width: 375px;
  height: 812px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Main />
      <NavBar />
    </AppContainer>
  );
};

export default App;
