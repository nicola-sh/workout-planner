import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.nav`
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink href="/pages/Main">Главная</NavLink>
      <NavLink href="/pages/Stats">Статистика</NavLink>
      <NavLink href="/pages/UserProfile">Мои данные</NavLink>
    </NavBarContainer>
  );
};

export default NavBar;
