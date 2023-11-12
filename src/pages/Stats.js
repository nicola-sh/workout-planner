import React, { useEffect } from "react";

import styled from "styled-components";

export const StatsContainer = styled.main`
  background-color: white;
  color: black;
  padding: 16px 32px;
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
`;

export const StatsTitle = styled.h1`
  font-size: 2em;
  text-align: center;
`;

const Stats = () => {
  return (
    <StatsContainer>
      <StatsTitle>Stats</StatsTitle>
    </StatsContainer>
  );
};

export default Stats;
