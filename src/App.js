import React, { useState } from "react";

import Main from "./pages/Main";

import Header from "./components/Header";
import NavBar from "./components/NavBar";

import styled from "styled-components";

const AppContainer = styled.div`
  width: 375px;
  height: 812px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const App = () => {
  const [currentPage, setCurrentPage] = useState("Главная");

  return (
    <AppContainer>
      <Header title={currentPage} />
      <Main setCurrentPage={setCurrentPage} />
      <NavBar />
    </AppContainer>
  );
};

export default App;
