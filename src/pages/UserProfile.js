import styled from "styled-components";
import React, { useState } from "react";

export const UserProfileContainer = styled.main`
  background-color: white;
  color: black;
  padding: 28px;
  margin-top: 90px;
  margin-bottom: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserProfileTitle = styled.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserInfoItem = styled.div`
  margin-bottom: 16px;
`;

const UserProfile = () => {
  const [name, setNewName] = useState("cola");
  const HandleClick = () => {
    setNewName(nicola);
  };

  return (
    <UserProfileContainer>
      <UserProfileTitle>Тут профиль пользователя, данные о молодом спортсмене</UserProfileTitle>
      <UserInfoContainer>
        <UserInfoItem>
          <strong>Name:</strong> {name}
        </UserInfoItem>
        {/* <UserInfoItem>
          <strong>Age:</strong> {age}
        </UserInfoItem>
        <UserInfoItem>
          <strong>Height:</strong> {height}
        </UserInfoItem>
        <UserInfoItem>
          <strong>Weight:</strong> {weight}
        </UserInfoItem> */}
      </UserInfoContainer>
    </UserProfileContainer>
  );
};

export default UserProfile;
