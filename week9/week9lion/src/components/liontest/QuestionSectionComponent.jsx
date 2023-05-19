import React, { useState } from "react";
import styled from "styled-components";
import { getAllQuestions } from "../../apis/liontest";

const QuestionSectionComponent = (props) => {
  const { data, getQuestion } = props;
  return (
    <>
      <QuestionSection>
        <Title>{data.title}</Title>
      </QuestionSection>
      <AnswerSection>
        {data.answerList.length > 0 &&
          data.answerList.map((answer, idx) => {
            return <Answer key={idx}>{answer.content}</Answer>;
          })}
      </AnswerSection>

      <NextButton>다음</NextButton>
    </>
  );
};

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 30px;
  font-size: 20px;
  background-color: #ffa43c;
  color: white;
  cursor: pointer;
  width: 15%;
  border-radius: 20px;
`;

const QuestionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 25px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #424242;
`;

const AnswerSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 15px;
`;

const Answer = styled.div`
  padding: 30px;
  border-radius: 20px;
  background-color: beige;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default QuestionSectionComponent;
