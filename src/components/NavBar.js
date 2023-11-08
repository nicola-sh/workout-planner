import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartBar, faUser } from "@fortawesome/free-solid-svg-icons";

const NavBarContainer = styled.nav`
  display: inline-flex;
  padding: 0px 38px;
  justify-content: center;
  align-items: flex-start;
  gap: 37px;
`;

const Title = styled.h1`
  width: 75px;
  color: #596aff;
  text-align: center;
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: "SF Pro Display";
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.3px;
`;

const NavLink = styled.a`
  color: #596aff;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink href="/pages/Main">
        <FontAwesomeIcon icon={faHome} />
        Главная
      </NavLink>
      <NavLink href="/pages/Stats">
        <FontAwesomeIcon icon={faChartBar} />
        Статистика
      </NavLink>
      <NavLink href="/pages/UserProfile">
        <FontAwesomeIcon icon={faUser} />
        Мои данные
      </NavLink>
    </NavBarContainer>
  );
};

export default NavBar;
