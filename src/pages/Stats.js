import React from "react";
import styled from "styled-components";

export const StatsContainer = styled.main`
  background-color: grey;
  color: black;
  padding: 16px 32px;
`;

const Main = () => {
  return (
    <StatsContainer>
      <h1>Stats</h1>
    </StatsContainer>
  );
};

export default Main;
