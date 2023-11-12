import React, { useEffect } from "react";

import styled from "styled-components";

export const UserProfileContainer = styled.main`
  background-color: white;
  color: black;
  padding: 16px 32px;
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
`;

export const UserProfileTitle = styled.h1`
  font-size: 2em;
  text-align: center;
`;

const UserProfile = () => {
  return (
    <UserProfileContainer>
      <UserProfileTitle>UserProfile</UserProfileTitle>
    </UserProfileContainer>
  );
};

export default UserProfile;
