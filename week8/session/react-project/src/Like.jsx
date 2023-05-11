import React from "react";
import "./style.css";
import moonbear from "./moonbear.jpg";
import { useState } from "react";

const Like = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
        <h1>2023년 5월 6일</h1>
        <img src={moonbear} alt="ad"></img>
        달곰이랑 45분 동안 산책했다 !
        <button className="btn" onClick={() => setCount((prev) => prev + 1)}>
          💖&nbsp;&nbsp;&nbsp;{count}
        </button>
      </div>
    </>
  );
};

export default Like;
