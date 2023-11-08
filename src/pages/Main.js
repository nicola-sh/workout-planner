import React from "react";
import styled from "styled-components";

export const MainContainer = styled.main`
  background-color: grey;
  color: black;
  padding: 16px 32px;
`;

const Main = () => {
  return (
    <MainContainer>
      <h1>Main</h1>
    </MainContainer>
  );
};

export default Main;
