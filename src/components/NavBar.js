import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import MainIcon from "assets/NavBarIcons/Main.svg";
import StatsIcon from "assets/NavBarIcons/Stats.svg";
import UserProfileIcon from "assets/NavBarIcons/UserProfile.svg";

const NavBarContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: #8f98a7;

  &:hover {
    color: #596aff;
  }

  &:active {
    color: #596aff;
  }
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;

  &:hover {
    color: #596aff;
    fill: #596aff;
  }

  &:active {
    color: #596aff;
    fill: #596aff;
    filter: invert(0.34) sepia(1) saturate(16.9) hue-rotate(223.2deg) brightness(1);
  }
`;

const Text = styled.span`
  margin-top: 4px;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink to="/">
        <IconImage src={MainIcon} alt="Main" />
        <Text>Главная</Text>
      </NavLink>
      <NavLink to="/Stats">
        <IconImage src={StatsIcon} alt="Stats" />
        <Text>Статистика</Text>
      </NavLink>
      <NavLink to="/UserProfile">
        <IconImage src={UserProfileIcon} alt="UserProfile" />
        <Text>Мои данные</Text>
      </NavLink>
    </NavBarContainer>
  );
};

export default NavBar;
