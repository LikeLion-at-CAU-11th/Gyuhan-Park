import React, { useState } from "react";
import styled from "styled-components";
import { getAllQuestions, getTestResult } from "../../apis/liontest";
import QuestionSectionComponent from "./QuestionSectionComponent";

const LionTestModal = () => {
  const [start, setStart] = useState(false);
  const [data, setData] = useState({});
  const [answer, setAnswer] = useState([]);
  const getQuestion = async (id) => {
    const questionData = await getAllQuestions();
    const questions = questionData.data.data;
    const question = questions[id];
    setData(question);
    setStart(true);
  };

  return (
    <>
      <Dom>
        <Title>⭐️ 찐 멋사인 테스트 ⭐️</Title>
        {start ? (
          <QuestionSectionComponent data={data} />
        ) : (
          <ContentBox>
            <Button onClick={() => getQuestion(0)}>시작하기</Button>
          </ContentBox>
        )}
      </Dom>
    </>
  );
};

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
`;

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

const Dom = styled.div`
  gap: 30px;
  background-color: #ffd9b6;
  width: 90vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  min-height: 600px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px lightgray;
`;

export default LionTestModal;
