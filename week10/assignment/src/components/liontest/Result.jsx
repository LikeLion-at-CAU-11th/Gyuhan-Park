import React, { Fragment } from "react";
import styled from "styled-components";
import ResultBtn from "./ResultBtn";

const Result = ({ finalResult, handleClickGetResult }) => {
  return (
    <>
      <Dom>
        {Object.keys(finalResult).length === 0 ? (
          <ResultBtn handleClickGetResult={handleClickGetResult} />
        ) : (
          <>
            <Total>점수: {finalResult.result} / 9</Total>
            {finalResult.incorrect.length > 0 &&
              finalResult.incorrect.map((data, idx) => (
                <Fragment key={idx}>
                  <Incorrect>{data.title}</Incorrect>
                  <Answer>정답 : {data.answer}</Answer>
                </Fragment>
              ))}
          </>
        )}
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

const Answer = styled.div`
  width: 100%;
  font-size: 15px;
`;

const Incorrect = styled.div`
  width: 100%;
  font-size: 26px;
`;

export default Result;
