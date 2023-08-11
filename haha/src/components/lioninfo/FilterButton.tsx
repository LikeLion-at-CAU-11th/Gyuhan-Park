import { ICategory, IUser } from "@/types";
import React from "react";
import styled from "styled-components";
import { getUserPerGender, getUserPerPage, getUserPerStack } from "@/apis/lioninfo";
import Link from "next/link";

interface IFilterButtonProps {
  data: ICategory;
  setUserData: React.Dispatch<React.SetStateAction<IUser[]>>;
  setIsPaged: React.Dispatch<React.SetStateAction<boolean>>;
  handleClickFilterButton: (title: String) => void;
  handleAllFirstPage: any;
}

const FilterButton = ({
  data,
  setUserData,
  setIsPaged,
  handleClickFilterButton,
  handleAllFirstPage,
}: IFilterButtonProps) => {
  const { type, title, clicked } = data;

  const handleClickButton = async (e: any) => {
    handleClickFilterButton(e.target.id);

    // All 버튼에만 pagenation 주기
    if (type === "page") setIsPaged(true);
    else setIsPaged(false);

    // type에 따라 API 결정
    if (type === "page") {
      console.log("all data: ", data);
      const response = await getUserPerPage("1");
      handleAllFirstPage("1");
      setUserData(response.data.data);
    } else if (type === "gender") {
      const response = await getUserPerGender(title);
      setUserData(response.data.data);
    } else if (type === "stack") {
      const response = await getUserPerStack(title);
      setUserData(response.data.data);
    }
  };
  return (
    <>
      <ButtonLink
        href={`/lioninfo?type=${type}`}
        style={{ textDecoration: "none" }}
        id={title}
        onClick={handleClickButton}
        $clicked={clicked}
      >
        {title}
      </ButtonLink>
    </>
  );
};

interface IButtonProps {
  $clicked: boolean;
}

const ButtonLink = styled(Link)<IButtonProps>`
  flex-basis: 13%;
  height: 70px;
  background-color: beige;
  color: gray;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: ${(props) => (props.$clicked ? "2px 2px 2px 2px gray" : "")};
  background-color: ${(props) => (props.$clicked ? "yellow" : "beige")};
`;

export default FilterButton;
