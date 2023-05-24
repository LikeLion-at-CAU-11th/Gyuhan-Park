import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/naye">나예집</Link>
        </li>
        <li>
          <Link to="/moonbear">화이트 퍼피 하우스</Link>
        </li>
        <li>
          <Link to="/books">책방</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
