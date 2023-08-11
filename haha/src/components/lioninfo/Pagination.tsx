import { IUser } from "@/types";
import React from "react";
import styled from "styled-components";
import { getUserPerPage } from "@/apis/lioninfo";

interface IPaginationProps {
  userData: IUser[];
  setUserData: React.Dispatch<React.SetStateAction<IUser[]>>;
  pageNumbers: {
    id: string;
    clicked: boolean;
  }[];
  handleClickPage: (id: string) => Promise<void>;
}

const Pagination = ({ pageNumbers, handleClickPage, userData, setUserData }: IPaginationProps) => {
  return (
    <PaginationDom>
      {pageNumbers.map((number) => (
        <PageNum
          key={number.id}
          id={number.id}
          $clicked={number.clicked}
          onClick={(e: any) => {
            handleClickPage(e.target.id);
          }}
        >
          {number.id}
        </PageNum>
      ))}
    </PaginationDom>
  );
};

interface PageNumProps {
  $clicked: boolean;
}

const PaginationDom = styled.div`
  display: flex;
  gap: 20px;
`;

const PageNum = styled.div<PageNumProps>`
  color: ${(props) => (props.$clicked ? "black" : "gray")};
  font-size: 25px;
  cursor: pointer;
`;

export default Pagination;
