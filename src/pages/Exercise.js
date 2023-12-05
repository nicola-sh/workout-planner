import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const ExerciseContainer = styled.div`
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

const ExerciseContent = styled.div`
  text-align: center;
`;

const ExerciseTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 16px;
`;

const ExerciseParagraph = styled.p`
  font-size: 1.2em;
  margin-bottom: 16px;
`;

const ExerciseButton = styled.button`
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Exercise = () => {
  const navigate = useNavigate();
  const { dayId } = useParams(); // Получаем параметр маршрута

  const [exercises, setExercises] = useState([
    { id: 1, name: "Приседания", repetitions: 15 },
    { id: 2, name: "Отжимания", repetitions: 20 },
    { id: 3, name: "Планка", repetitions: "1 минута" },
    { id: 4, name: "Жим лежа", repetitions: 12 },
    { id: 5, name: "Пресс", repetitions: "30 секунд" },
  ]);

  const [dayInfo, setDayInfo] = useState(null);

  useEffect(() => {
    // fetchDataForDay(dayId).then(data => setExercises(data));
  }, [dayId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Список упражнений для дня {dayId}</h1>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise;
