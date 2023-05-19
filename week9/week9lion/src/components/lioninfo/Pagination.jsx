import React, { useState } from "react";
import styled from "styled-components";
import { getUserPerPage } from "../../apis/lioninfo";

const Pagination = (props) => {
  const { setUserData } = props;
  const [pageNumbers, setPageNumbers] = useState([
    { id: "1", clicked: true },
    { id: "2", clicked: false },
    { id: "3", clicked: false },
    { id: "4", clicked: false },
    { id: "5", clicked: false },
    { id: "6", clicked: false },
    { id: "7", clicked: false },
  ]);

  const handleClickPage = async (e) => {
    const response = await getUserPerPage(e.target.id);
    setPageNumbers(
      pageNumbers.map((number) =>
        number.id === e.target.id
          ? { ...number, clicked: true }
          : { ...number, clicked: false }
      )
    );
    setUserData(response.data.data);
  };

  return (
    <PaginationDom>
      {pageNumbers.map((number) => (
        <PageNum
          key={number.id}
          id={number.id}
          clicked={number.clicked}
          onClick={handleClickPage}
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
