import { IUser } from "@/types";
import React from "react";
import styled from "styled-components";
import UserCard from "./UserCard";

const UserDataSection = ({ userData }: { userData: IUser[] }) => {
  return (
    <Dom>
      {userData && userData.map((user: IUser, idx: number) => <UserCard key={idx} user={user} />)}
    </Dom>
  );
};

const Dom = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 90%;
  overflow: scroll;
  align-content: flex-start;
  padding: 0 20px;
  min-height: 400px;
`;

export default UserDataSection;
