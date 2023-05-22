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
      <Title>🍉🍉🍉</Title>
      <ButtonDom>
        {categories.map((category, idx) => (
          <FilterButton
            key={idx}
            title={category.title}
            type={category.type}
            setUserData={setUserData}
            handleClickPage={handleClickPage}
            setIsPaged={setIsPaged}
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
