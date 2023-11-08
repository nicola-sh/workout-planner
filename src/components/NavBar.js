import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.nav`
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const LinksContainer = styled.div`
  display: flex;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-size: 16px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <Title>Главная</Title>
      <LinksContainer>
        <NavLink href="/pages/Main">Главная</NavLink>
        <NavLink href="/pages/Stats">Статистика</NavLink>
        <NavLink href="/pages/UserProfile">Мои данные</NavLink>
      </LinksContainer>
    </NavBarContainer>
  );
};

export default NavBar;
