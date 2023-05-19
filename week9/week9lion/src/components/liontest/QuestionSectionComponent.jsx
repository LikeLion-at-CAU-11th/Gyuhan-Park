import React, { useState } from "react";
import styled from "styled-components";
import { getAllQuestions } from "../../apis/liontest";

// 클릭한 <Answer> 의 aid값을 nowAnswer의 answer 프로퍼티값으로 사용
// nowAnswer = {id: 현재문제id, answer: 선택한 aid}
const QuestionSectionComponent = (props) => {
  const { question, getQuestion, handleResultAnswer } = props;
  const [questionNumber, setQuestionNumber] = useState(0);

  const [nowAnswer, setNowAnswer] = useState({
    id: questionNumber,
    answer: 0,
  });

  const handleClickNextButton = () => {
    console.log("nowAnswer:", nowAnswer);
    getQuestion(questionNumber + 1);
    setQuestionNumber((prev) => prev + 1);
    setNowAnswer({ ...nowAnswer, id: questionNumber + 1 });
    handleResultAnswer(nowAnswer);
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
                onClick={() =>
                  setNowAnswer({ ...nowAnswer, answer: answer.aid })
                }
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
