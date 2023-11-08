import React from "react";

import styled from "styled-components";

export const UserProfileContainer = styled.main`
  background-color: grey;
  color: black;
  padding: 16px 32px;
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
`;

const UserProfile = ({ setCurrentPage }) => {
  setCurrentPage("Профиль пользователя");

  return (
    <UserProfileContainer>
      <h1>UserProfile</h1>
    </UserProfileContainer>
  );
};

export default UserProfile;
