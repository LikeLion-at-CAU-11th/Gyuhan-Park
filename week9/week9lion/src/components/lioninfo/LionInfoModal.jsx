import React, { useState } from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";
import Pagination from "./Pagination";
import UserDataSection from "./UserDataSection";

const LionInfoModal = () => {
  const [userData, setUserData] = useState([]);

  const categories = [
    {
      type: "page",
      title: "All",
    },
    {
      type: "gender",
      title: "male",
    },
    {
      type: "gender",
      title: "female",
    },
    {
      type: "stack",
      title: "frontend",
    },
    {
      type: "stack",
      title: "backend",
    },
    {
      type: "stack",
      title: "design",
    },
    {
      type: "stack",
      title: "pm",
    },
  ];

  return (
    <Dom>
      <Title>🍉🍉🍉</Title>
      <ButtonDom>
        {categories.map((category, idx) => (
          <FilterButton
            key={idx}
            title={category.title}
            type={category.type}
            setUserData={setUserData}
          />
        ))}
      </ButtonDom>
      <UserDataSection userData={userData} />
      {/* <Pagination /> */}
    </Dom>
  );
};

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const ButtonDom = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Dom = styled.div`
  gap: 30px;
  background-color: #ffd9b6;
  width: 90vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  border-radius: 20px;
  box-shadow: 5px 5px 5px lightgray;
`;

export default LionInfoModal;
