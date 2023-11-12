import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: white;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px 12px 20px;
  position: fixed;
  width: 375px;
  height: 45px;
`;

const Title = styled.h1`
  color: #1c1c1c;
  text-align: center;
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: "SF Pro Display";
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.3px;
  margin: 0;
`;

const Header = ({ location }) => {
  // Определите заголовок в зависимости от текущего маршрута
  const getTitle = (pathname) => {
    // switch(this.props.location.pathname){
    switch (pathname.toLowerCase()) {
      case "/":
        return "Главная";
      case "/stats":
        return "Статистика";
      case "/userprofile":
        return "Мои данные";
      default:
        return "";
    }
  };

  const title = getTitle(location.pathname);

  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default Header;
