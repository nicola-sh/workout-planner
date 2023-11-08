import styled from "styled-components";

export const MainContainer = styled.main`
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

import React from "react";
import { useState } from "react";

const Main = () => {
  const [days, setDays] = useState([
    { TimeToStart: "Сегодня", DayName: "День А", id: 1 },
    { TimeToStart: "Через 2 дня", DayName: "День Б", id: 2 },
    { TimeToStart: "Через 4 дня", DayName: "День Рук", id: 3 },
    { TimeToStart: "Через неделю", DayName: "День Ног", id: 4 },
  ]);

  return (
    <MainContainer>
      {days.map((day) => (
        <div className="day-preview" key={day.id}>
          <h3>{day.TimeToStart}</h3>
          <h4>{day.DayName}</h4>
        </div>
      ))}
    </MainContainer>
  );
};

export default Main;
