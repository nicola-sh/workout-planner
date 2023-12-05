import React, { useState } from "react";
import * as S from "./Styles";

const DaysList = ({ days, handleDayClick, handleDeleteDay, handleInputChange, handleAddDay }) => {
  return (
    <div>
      <S.DayListContainer>
        {days.map((day) => (
          <S.DayContainer key={day.id}>
            <S.DayBlock onClick={() => handleDayClick(day.id)}>
              <S.TimeToStart>{day.TimeToStart}</S.TimeToStart>
              <S.DayName>{day.DayName}</S.DayName>
            </S.DayBlock>
            <S.DeleteButton type="button" onClick={() => handleDeleteDay(day.id)}>
              X
            </S.DeleteButton>
          </S.DayContainer>
        ))}
        <S.DayContainer>
          <S.DayBlock>
            <S.Selector
              name="TimeToStart"
              value={handleInputChange.TimeToStart}
              onChange={handleInputChange}
            >
              <option value="Пн">Пн</option>
              <option value="Вт">Вт</option>
              <option value="Ср">Ср</option>
              <option value="Чт">Чт</option>
              <option value="Пт">Пт</option>
              <option value="Сб">Сб</option>
              <option value="Вс">Вс</option>
            </S.Selector>
            <S.Input
              type="text"
              placeholder="Название дня"
              name="DayName"
              value={handleInputChange.DayName}
              onChange={handleInputChange}
            />
          </S.DayBlock>
          <S.AddButton onClick={handleAddDay}>Добавить день</S.AddButton>
        </S.DayContainer>
      </S.DayListContainer>
    </div>
  );
};

export default DaysList;
