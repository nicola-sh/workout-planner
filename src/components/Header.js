import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Главная</Title>
    </HeaderContainer>
  );
};

export default Header;
