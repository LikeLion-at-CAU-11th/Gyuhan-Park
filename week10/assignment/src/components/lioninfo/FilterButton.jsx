import React from "react";
import styled from "styled-components";
import {
  getUserPerGender,
  getUserPerPage,
  getUserPerStack,
} from "../../apis/lioninfo";
import { Link } from "react-router-dom";

const FilterButton = ({
  data,
  setUserData,
  handleClickFilterButton,
  handleClickPage,
  setIsPaged,
}) => {
  const { type, title, clicked } = data;
  const handleClick = async (e) => {
    if (type === "page") setIsPaged(true);
    else setIsPaged(false);

    handleClickFilterButton(e.target.id);
    if (type === "page") {
      const response = await getUserPerPage(1);
      setUserData(response.data.data);
      handleClickPage("1");
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
        to={`/?type=${type}`}
        style={{ textDecoration: "none" }}
        id={title}
        onClick={handleClick}
        selected={clicked}
      >
        {title}
      </ButtonLink>
    </>
  );
};

const ButtonLink = styled(Link)`
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
  box-shadow: ${(props) => (props.selected ? "2px 2px 2px 2px gray" : "")};
  background-color: ${(props) => (props.selected ? "yellow" : "beige")};
`;
export default FilterButton;
