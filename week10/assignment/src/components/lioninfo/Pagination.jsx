import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Pagination = ({ pages, handleClickPage }) => {
  return (
    <PaginationDom>
      {pages.map((page, index) => (
        <PageNum key={index} id={page.id} clicked={page.clicked}>
          <PageLink to={`?type=page&page=${page.id}`} selected={page.clicked}>
            {page.id}
          </PageLink>
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

const PageLink = styled(Link)`
  color: ${(props) => (props.selected ? "black" : "gray")};
  font-size: ${(props) => (props.selected ? "28px" : "25px")};
  cursor: pointer;
`;

export default Pagination;
