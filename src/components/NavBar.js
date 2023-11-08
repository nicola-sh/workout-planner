import React from "react";
import styled from "styled-components";

import MainIcon from "assets/NavBarIcons/Main.png";
import StatsIcon from "assets/NavBarIcons/Stats.png";
import UserProfileIcon from "assets/NavBarIcons/UserProfile.png";

import Main from "pages/Main";
import Stats from "pages/Stats";
import UserProfile from "pages/UserProfile";

const NavBarContainer = styled.nav`
  display: inline-flex;
  padding: 0px 38px;
  justify-content: center;
  align-items: flex-start;
  gap: 37px;
`;

const NavLink = styled.a`
  color: #596aff;
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
`;

const Text = styled.span`
  margin-top: 4px;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink href="/pages/Main">
        <IconImage src={MainIcon} alt="Main" />
        <Text>Главная</Text>
      </NavLink>
      <NavLink href="/pages/Stats">
        <IconImage src={StatsIcon} alt="Stats" />
        <Text>Статистика</Text>
      </NavLink>
      <NavLink href="/pages/UserProfile">
        <IconImage src={UserProfileIcon} alt="UserProfile" />
        <Text>Мои данные</Text>
      </NavLink>
    </NavBarContainer>
  );
};

export default NavBar;
