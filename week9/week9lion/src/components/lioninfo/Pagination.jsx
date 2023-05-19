import React, { useState } from "react";
import styled from "styled-components";
import { getAllUserPerPage, getUserPerPage } from "../../apis/lioninfo";

const Pagination = (props) => {
  const { userData, setUserData } = props;
  const [pageNumbers, setPageNumbers] = useState([
    { id: "1", clicked: false },
    { id: "2", clicked: false },
    { id: "3", clicked: false },
    { id: "4", clicked: false },
    { id: "5", clicked: false },
    { id: "6", clicked: false },
    { id: "7", clicked: false },
  ]);

  // 페이지별 데이터 각각 받아와, PageButton 컴포넌트 클릭 시 알맞는 데이터 렌더링
  //   const handleClickPage = async (e) => {
  //     const response = await getUserPerPage(e.target.id);
  //     setPageNumbers(
  //       pageNumbers.map((number) =>
  //         number.id === e.target.id
  //           ? { ...number, clicked: true }
  //           : { ...number, clicked: false }
  //       )
  //     );
  //     setUserData(response.data.data);
  //   };

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
    <PaginationDom>
      {pageNumbers.map((number) => (
        <PageNum
          key={number.id}
          id={number.id}
          clicked={number.clicked}
          onClick={(e) => handleClickPage(e.target.id)}
        >
          {number.id}
        </PageNum>
      ))}
    </PaginationDom>
  );
};

const PaginationDom = styled.div`
  display: flex;
  gap: 20px;
`;

const PageNum = styled.div`
  color: ${(props) => (props.clicked ? "black" : "gray")};
  font-size: 25px;
  cursor: pointer;
`;

export default Pagination;
