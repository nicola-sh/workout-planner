import React, { useState, useEffect } from "react";
import DaysList from "components/DaysList";
import styled from "styled-components";

export const MainContainer = styled.main`
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

const Main = () => {
  const [days, setDays] = useState([
    { TimeToStart: "Сегодня", DayName: "День А", id: 1 },
    { TimeToStart: "Через 2 дня", DayName: "День Б", id: 2 },
    { TimeToStart: "Через 4 дня", DayName: "День Рук", id: 3 },
    { TimeToStart: "Через неделю", DayName: "День Ног", id: 4 },
  ]);

  return (
    <MainContainer>
      <DaysList days={days} />
    </MainContainer>
  );
};

export default Main;
