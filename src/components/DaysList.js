import React from "react";
import styled from "styled-components";

const DayListContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const DayPreview = styled.div`
  width: 343px;
  height: 80px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const TimeToStart = styled.h3`
  width: 140px;
  height: 24px;
  color: #758095;
  font-family: "SF Pro Display";
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
`;

const DayName = styled.h4`
  width: 150px;
  height: 24px;
  color: #1c1c1c;
  font-family: "SF Pro Display";
  font-size: 19px;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
`;

const DaysList = ({ days }) => {
  return (
    <DayListContainer>
      {days.map((day) => (
        <DayPreview key={day.id}>
          <TimeToStart>{day.TimeToStart}</TimeToStart>
          <DayName>{day.DayName}</DayName>
        </DayPreview>
      ))}
    </DayListContainer>
  );
};

export default DaysList;
