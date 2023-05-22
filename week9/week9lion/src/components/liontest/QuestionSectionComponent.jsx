import React, { useState } from "react";
import styled from "styled-components";

// 클릭한 <Answer> 의 aid값을 nowAnswer의 answer 프로퍼티값으로 사용
const QuestionSectionComponent = (props) => {
  const { question, getNewQuestion, handleResultAnswer, handleClickQuestion } =
    props;
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleClickNextButton = () => {
    const clickedAnswer = question.answerList.filter((data) =>
      data.clicked === true ? { id: data.aid, answer: data.content } : ""
    );

    getNewQuestion(questionNumber + 1);
    setQuestionNumber((prev) => prev + 1);
    handleResultAnswer(
      clickedAnswer.length > 0
        ? {
            id: questionNumber,
            answer: clickedAnswer[0].aid,
          }
        : {
            id: questionNumber,
            answer: 0,
          }
    );
  };

  return (
    <>
      <QuestionSection>
        <Title>{question.title}</Title>
      </QuestionSection>
      <AnswerSection>
        {question.answerList.length > 0 &&
          question.answerList.map((answer, idx) => {
            return (
              <Answer
                key={idx}
                onClick={() => handleClickQuestion(answer.aid)}
                clicked={answer.clicked}
              >
                {answer.content}
              </Answer>
            );
          })}
      </AnswerSection>

      <NextButton onClick={handleClickNextButton}>다음</NextButton>
    </>
  );
};

const Answer = styled.div`
  padding: 30px;
  border-radius: 20px;
  background-color: beige;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    background-color: yellow;
  }
  border: ${(props) => (props.clicked ? "5px solid black" : "")};
  background-color: ${(props) => (props.clicked ? "yellow" : "beige")};
`;

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

export default QuestionSectionComponent;
