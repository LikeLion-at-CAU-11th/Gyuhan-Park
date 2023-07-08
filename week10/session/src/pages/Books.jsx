import React from "react";
import { Link, Outlet } from "react-router-dom";
const Books = () => {
  return (
    <div>
      <h1>이 달의 책</h1>
      <Outlet />
      <ul>
        <li>
          <Link to="/books/1">책 하나</Link>
        </li>
        <li>
          <Link to="/books/2">책 둘</Link>
        </li>
        <li>
          <Link to="/books/3">책 셋</Link>
        </li>
      </ul>
    </div>
  );
};

export default Books;
