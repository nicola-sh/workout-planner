import React from "react";
import styled from "styled-components";

export const UserProfileContainer = styled.main`
  background-color: grey;
  color: black;
  padding: 16px 32px;
`;

const Main = () => {
  return (
    <UserProfileContainer>
      <h1>UserProfile</h1>
    </UserProfileContainer>
  );
};

export default Main;
