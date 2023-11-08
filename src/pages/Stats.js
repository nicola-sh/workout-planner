import React from "react";
import styled from "styled-components";

export const StatsContainer = styled.main`
  background-color: grey;
  color: black;
  padding: 16px 32px;
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
`;

const Main = () => {
  return (
    <StatsContainer>
      <h1>Stats</h1>
    </StatsContainer>
  );
};

export default Main;
