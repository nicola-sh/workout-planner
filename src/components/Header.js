import styled from "styled-components";
import React from "react";

export const Container = styled.header`
  align-items: center;
  background-color: grey;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const Title = styled.h1`
  color: black;
  font-size: 20px;
  margin: 0 16px;
`;

const Header = () => {
  return (
    <Container>
      <Title>Главная</Title>
    </Container>
  );
};

export default Header;
