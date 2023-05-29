import React from "react";
import styled from "styled-components";

const ResultBtn = ({ handleClickGetResult }) => {
  return (
    <ContentBox>
      <Button onClick={handleClickGetResult}>결과보기</Button>
    </ContentBox>
  );
};

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  font-size: 25px;
  color: gray;
  background-color: beige;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
`;

export default ResultBtn;
