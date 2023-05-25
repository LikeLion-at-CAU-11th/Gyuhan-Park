import React, { useState } from "react";
import styled from "styled-components";
import { getAllUserPerPage, getUserPerPage } from "../../apis/lioninfo";
import FilterButton from "./FilterButton";
import Pagination from "./Pagination";
import UserDataSection from "./UserDataSection";

const LionInfoModal = () => {
  const [userData, setUserData] = useState([]);
  const [isPaged, setIsPaged] = useState(false);
  const [pages, setPages] = useState([
    { id: "1", clicked: false },
    { id: "2", clicked: false },
    { id: "3", clicked: false },
    { id: "4", clicked: false },
    { id: "5", clicked: false },
    { id: "6", clicked: false },
    { id: "7", clicked: false },
  ]);

  const [categories, setCategories] = useState([
    {
      type: "page",
      title: "All",
      clicked: false,
    },
    {
      type: "gender",
      title: "male",
      clicked: false,
    },
    {
      type: "gender",
      title: "female",
      clicked: false,
    },
    {
      type: "stack",
      title: "frontend",
      clicked: false,
    },
    {
      type: "stack",
      title: "backend",
      clicked: false,
    },
    {
      type: "stack",
      title: "design",
      clicked: false,
    },
    {
      type: "stack",
      title: "pm",
      clicked: false,
    },
  ]);

  const handleClickPage = async (id) => {
    const response = await getUserPerPage(id);
    setUserData(response.data.data);
    setPages(
      pages.map((page) =>
        page.id === id
          ? { ...page, clicked: true }
          : { ...page, clicked: false }
      )
    );
  };

  const handleClickFilterButton = (title) => {
    setCategories(
      categories.map((category) =>
        category.title === title
          ? { ...category, clicked: true }
          : { ...category, clicked: false }
      )
    );
  };

  return (
    <Dom>
      <Title>🦁 LikeLion 11th 화이팅🦁</Title>
      <ButtonDom>
        {categories.map((category, index) => (
          <FilterButton
            key={index}
            data={category}
            setUserData={setUserData}
            handleClickFilterButton={handleClickFilterButton}
            handleClickPage={handleClickPage}
            setIsPaged={setIsPaged}
          />
        ))}
      </ButtonDom>
      <UserDataSection userData={userData} />
      {isPaged && (
        <Pagination pages={pages} handleClickPage={handleClickPage} />
      )}
    </Dom>
  );
};

const Title = styled.div`
  width: 500px;
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

const Button = styled.div`
  flex-basis: 13%;
  height: 50px;
  font-weight: 700;
  background-color: orange;
  color: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
  &:active {
    transform: scale(1.5);
  }
`;

export default LionInfoModal;
