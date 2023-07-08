import React, { useState, useEffect } from "react";

const ThumbsUp = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("렌더링");
    console.log(count, name);
  });

  return (
    <>
      <div>이름 : {name}</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </>
  );
};

export default ThumbsUp;
