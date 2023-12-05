import React, { useState, useEffect } from "react";
import DaysList from "components/DaysList/DaysList";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.main`
  background-color: white;
  color: black;
  padding: 16px 32px;
  margin-top: 90px;
  margin-bottom: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

const Main = () => {
  const [days, setDays] = useState([
    { TimeToStart: "Сегодня", DayName: "День А", id: 1 },
    { TimeToStart: "Через 2 дня", DayName: "День Б", id: 2 },
    { TimeToStart: "Через 4 дня", DayName: "День Рук", id: 3 },
    { TimeToStart: "Через неделю", DayName: "День Ног", id: 4 },
  ]);

  const [exercisesByDay, setExercisesByDay] = useState({
    1: [
      { id: 1, name: "Приседания", repetitions: 15 },
      { id: 2, name: "Отжимания", repetitions: 20 },
      // другие упражнения для дня 1
    ],
    2: [
      { id: 6, name: "Бег", repetitions: "30 минут" },
      { id: 7, name: "Плавание", repetitions: "20 минут" },
    ],
    // данные об упражнениях для других дней
  });

  const [newDay, setNewDay] = useState({ TimeToStart: "", DayName: "" });
  const navigate = useNavigate();
  const [updatedDays, setUpdatedDays] = useState(days);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDay((prevDay) => ({ ...prevDay, [name]: value }));
  };

  const handleAddDay = () => {
    if (newDay.TimeToStart && newDay.DayName) {
      setDays((prevDays) => [...prevDays, { ...newDay, id: prevDays.length + 1 }]);
      setNewDay({ TimeToStart: "", DayName: "" });
    } else {
      console.error("error");
    }
  };

  const handleDayClick = (id) => {
    navigate(`/exercise/${id}`);
  };

  const handleDeleteDay = (id) => {
    const newDays = days.filter((day) => day.id !== id);
    setDays(newDays);
  };

  return (
    <MainContainer>
      <DaysList
        days={days}
        handleDayClick={handleDayClick}
        handleInputChange={handleInputChange}
        handleDeleteDay={handleDeleteDay}
        handleAddDay={handleAddDay}
        newDay={newDay}
      />
    </MainContainer>
  );
};

export default Main;
