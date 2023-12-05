import React from "react";
import styled from "styled-components";

const StatsContainer = styled.main`
  background-color: white;
  color: black;
  padding: 28px;
  margin-top: 45px;
  margin-bottom: 45px;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StatsTitle = styled.h1`
  font-size: 2em;
  text-align: center;
`;

const Stats = () => {
  return (
    <StatsContainer>
      <StatsTitle>Тут буду графики, статистика по тренировкам и прогрессии</StatsTitle>
    </StatsContainer>
  );
};

export default Stats;
