import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";

import Main from "./pages/Main";
import Stats from "./pages/Stats";
import UserProfile from "./pages/UserProfile";

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
  const location = useLocation();

  return (
    <AppContainer>
      <Header location={location} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
      <NavBar />
    </AppContainer>
  );
};

export default App;
