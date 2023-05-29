import React, { useState } from "react";
import styled from "styled-components";
import { getAllUserPerPage } from "../../apis/lioninfo";
import FilterButton from "./FilterButton";
import Pagination from "./Pagination";
import UserDataSection from "./UserDataSection";

const LionInfoModal = () => {
  const [userData, setUserData] = useState([]);
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

  const handleClickSort = () => {
    setUserData(userData.slice().sort((a, b) => (a.name > b.name ? 1 : -1)));
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

  // 전체 리스트 (28개 데이터) 받아와 클라이언트단에서 슬라이싱하여, PageButton 컴포넌트 클릭 시 알맞는 데이터 렌더링
  const handleClickPage = async (id) => {
    const response = await getAllUserPerPage();
    const userDataPerPage = response.data.data.slice((id - 1) * 4, id * 4);
    setUserData(userDataPerPage);
    setPageNumbers(
      pageNumbers.map((number) =>
        number.id === id
          ? { ...number, clicked: true }
          : { ...number, clicked: false }
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
            handleClickPage={handleClickPage}
            setIsPaged={setIsPaged}
            handleClickFilterButton={handleClickFilterButton}
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
