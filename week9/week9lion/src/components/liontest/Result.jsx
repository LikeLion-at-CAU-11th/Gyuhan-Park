import React, { Fragment } from "react";
import styled from "styled-components";

const Result = ({ finalResult }) => {
  return (
    <>
      <Dom>
        <Total>점수: {finalResult.result} / 9</Total>
        {finalResult.incorrect.length > 0 &&
          finalResult.incorrect.map((data, idx) => (
            <Fragment key={idx}>
              <Incorrect>{data.title}</Incorrect>
              <Answer>정답 : {data.answer}</Answer>
            </Fragment>
          ))}
      </Dom>
    </>
  );
};

const Dom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 25px;
  align-items: center;
`;

const Total = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

const Question = styled.div`
  width: 100%;
`;

const Answer = styled.div`
  width: 100%;
  font-size: 15px;
`;

const Incorrect = styled.div`
  width: 100%;
  font-size: 26px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export default Result;
