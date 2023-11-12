import React, { useState } from "react";
import styled from "styled-components";

const DayListContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const DayBlock = styled.div`
  width: 343px;
  height: 80px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #e0e0e0;
  }
`;

const TimeToStart = styled.h3`
  width: 140px;
  height: 24px;
  color: #758095;
  font-family: "SF Pro Display";
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 28px 16px 28px 16px;
`;

const DayName = styled.h4`
  width: 150px;
  height: 24px;
  color: #1c1c1c;
  font-family: "SF Pro Display";
  font-size: 19px;
  font-weight: 600;
  line-height: 24px;
  margin: 28px 16px 28px 16px;
`;

const AddDayBlock = styled.div`
  width: 343px;
  height: 80px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #e0e0e0;
  }
`;

const AddDayText = styled.h3`
  width: 140px;
  height: 24px;
  color: #758095;
  font-family: "SF Pro Display";
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 28px 16px 28px 16px;
`;

const DaysList = ({ days }) => {
  return (
    <div>
      <DayListContainer>
        {days.map((day) => (
          <DayBlock key={day.id}>
            <TimeToStart>{day.TimeToStart}</TimeToStart>
            <DayName>{day.DayName}</DayName>
          </DayBlock>
        ))}
        <AddDayBlock>
          <AddDayText>Добавить день</AddDayText>
        </AddDayBlock>
      </DayListContainer>
    </div>
  );
};

export default DaysList;
