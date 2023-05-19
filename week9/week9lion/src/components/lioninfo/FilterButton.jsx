import React from "react";
import styled from "styled-components";
import {
  getUserPerGender,
  getUserPerPage,
  getUserPerStack,
} from "../../apis/lioninfo";

const FilterButton = (props) => {
  const { type, title, setUserData } = props;
  const handleClickButton = async () => {
    // type에 따라 API 결정
    if (type === "page") {
      const response = await getUserPerPage(1);
      setUserData(response.data.data);
    } else if (type === "gender") {
      const response = await getUserPerGender(title);
      setUserData(response.data.data);
    } else if (type === "stack") {
      const response = await getUserPerStack(title);
      setUserData(response.data.data);
    }
  };
  return <Button onClick={handleClickButton}>{title}</Button>;
};

const Button = styled.div`
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
`;
export default FilterButton;
