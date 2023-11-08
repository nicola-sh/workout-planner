import { useState } from "react";

import exerciseImage from "assets/ExerciseImage04.png";

import { Container, Image, Text } from "./styled";

function Item(props) {
  const [isCompleted, setIsCompleted] = useState(props.completed);

  const toggleCompleteness = () => {
    setIsCompleted((prevState) => !prevState);
  };

  return (
    <Container onClick={toggleCompleteness}>
      {/* <Image src={isCompleted ? tickImage : crossImage} /> */}
      {/* <Text>{props.text}</Text> */}
      <Image src={exerciseImage} />
      <Text>TimeToStart</Text>
      <Text>DayName</Text>
    </Container>
  );
}

export default Item;
