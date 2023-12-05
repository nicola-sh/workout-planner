import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";

import Main from "./pages/Main";
import Stats from "./pages/Stats";
import UserProfile from "./pages/UserProfile";
import Exercise from "./pages/Exercise";

import { CreateStore } from "redux";
import { Provider, connect, useSelector, useDispatch } from "redux";

import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  // display: flex;
  // flex-direction: column;
  // align-items: stretch;
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
        <Route path="/exercise/:dayId" element={<Exercise />} />
      </Routes>
      <NavBar />
    </AppContainer>
  );
};

export default App;
