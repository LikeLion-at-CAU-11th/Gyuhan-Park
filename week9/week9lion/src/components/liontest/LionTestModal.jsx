import React, { useState } from "react";
import styled from "styled-components";
import { getAllQuestions, getTestResult } from "../../apis/liontest";
import QuestionSectionComponent from "./QuestionSectionComponent";

// 시작하기 버튼 클릭 -> 첫 번째 문제 나옴
// QuestionSectionComponent 가 한 문제에 대한 컴포넌트
// 다음 버튼을 누르면 id+1을 넘겨주고 getQuestion(id) data가 다시 세팅되면서 리렌더링
// question이 비어있으면 결과보기 버튼
// 결과보기 버튼 클릭 : getTestResult(resultAnswer)
const LionTestModal = () => {
  const [start, setStart] = useState(false);
  const [question, setQuestion] = useState({});
  const [resultAnswer, setResultAnswer] = useState([]);

  const getQuestion = async (id) => {
    const questionData = await getAllQuestions();
    const questions = questionData.data.data;
    if (!questions[id]) {
      setStart(false);
    } else {
      setQuestion(questions[id]);
      setStart(true);
    }
  };

  const handleResultAnswer = (nowAnswer) => {
    console.log("resultAnswer:", resultAnswer);
    setResultAnswer([...resultAnswer, nowAnswer]);
  };

  const handleClickGetResult = async () => {
    const response = await getTestResult(resultAnswer);
    console.log(response.data.data);
    console.log("incorrect:", response.data.data.incorrect);
    console.log("correct:", response.data.data.result);
  };

  return (
    <>
      <Dom>
        <Title>⭐️ 찐 멋사인 테스트 ⭐️</Title>
        {start ? (
          <>
            <QuestionSectionComponent
              question={question}
              getQuestion={getQuestion}
              handleResultAnswer={handleResultAnswer}
            />
          </>
        ) : resultAnswer ? (
          <Button onClick={handleClickGetResult}>결과보기</Button>
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
