import { ICategory, IUser } from "@/types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getUserPerPage } from "@/apis/lioninfo";
import FilterButton from "./FilterButton";
import Pagination from "./Pagination";
import UserDataSection from "./UserDataSection";
import { useSearchParams } from "next/navigation";

const LionInfoModal = () => {
  const [userData, setUserData] = useState<IUser[]>([]);
  const searchParams = useSearchParams();
  const paramsType = searchParams.get("type");
  console.log("parameter:", paramsType);

  const [pageNumbers, setPageNumbers] = useState([
    { id: "1", clicked: false },
    { id: "2", clicked: false },
    { id: "3", clicked: false },
    { id: "4", clicked: false },
    { id: "5", clicked: false },
    { id: "6", clicked: false },
    { id: "7", clicked: false },
  ]);
  const [isPaged, setIsPaged] = useState(false); // pagenation 이 필요한 상황 구분

  const [categories, setCategories] = useState<ICategory[]>([
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

  const handleClickSort = () => {
    setUserData(userData.slice().sort((a, b) => (a.name > b.name ? 1 : -1)));
  };

  const handleClickFilterButton = (title: String) => {
    setCategories(
      categories.map((category) =>
        category.title === title ? { ...category, clicked: true } : { ...category, clicked: false }
      )
    );
  };

  const handleClickPage = async (id: string) => {
    const response = await getUserPerPage(id);
    setPageNumbers(
      pageNumbers.map((number) =>
        number.id === id ? { ...number, clicked: true } : { ...number, clicked: false }
      )
    );
    setUserData(response.data.data);
  };

  const handleAllFirstPage = (id: string) => {
    setPageNumbers(
      pageNumbers.map((number) =>
        number.id === id ? { ...number, clicked: true } : { ...number, clicked: false }
      )
    );
  };

  return (
    <Dom>
      <div style={{ display: "flex" }}>
        <Title>🍉🍉🍉</Title>
        <ButtonDom>
          <Button onClick={handleClickSort}>SORT</Button>
        </ButtonDom>
      </div>

      <ButtonDom>
        {categories.map((category, idx) => (
          <FilterButton
            key={idx}
            data={category}
            setUserData={setUserData}
            setIsPaged={setIsPaged}
            handleClickFilterButton={handleClickFilterButton}
            handleAllFirstPage={handleAllFirstPage}
          />
        ))}
      </ButtonDom>
      <UserDataSection userData={userData} />
      {isPaged && (
        <Pagination
          userData={userData}
          setUserData={setUserData}
          pageNumbers={pageNumbers}
          handleClickPage={handleClickPage}
        />
      )}
    </Dom>
  );
};

const Title = styled.div`
  width: 300px;
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
