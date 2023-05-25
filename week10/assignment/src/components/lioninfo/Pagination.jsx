import React from "react";
import styled from "styled-components";
import { getUserPerPage } from "../../apis/lioninfo";

const Pagination = ({ pages, handleClickPage }) => {
  return (
    <PaginationDom>
      {pages.map((page, index) => (
        <PageNum
          key={index}
          id={page.id}
          onClick={(e) => handleClickPage(e.target.id)}
          clicked={page.clicked}
        >
          {page.id}
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
  font-size: ${(props) => (props.clicked ? "28px" : "25px")};
  cursor: pointer;
`;

export default Pagination;
