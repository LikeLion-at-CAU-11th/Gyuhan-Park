import React, { useState } from "react";
import styled from "styled-components";

const Pagination = () => {
  const [pageNumbers, setPageNumbers] = useState([
    { id: 1, clicked: false },
    { id: 2, clicked: false },
    { id: 3, clicked: false },
    { id: 4, clicked: false },
    { id: 5, clicked: false },
    { id: 6, clicked: false },
    { id: 7, clicked: false },
  ]);

  return (
    <PaginationDom>
      {pageNumbers.map((number) => (
        <PageNum
          key={number}
          clicked={number.clicked}
          onClick={(e) => (e.target.innerText === number.id ? true : false)}
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
