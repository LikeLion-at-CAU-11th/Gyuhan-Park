import React from "react";
import { useParams } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "김금희, <너무 한낮의 연애>",
    text: '“오늘도 어떻다고?”“사랑하죠. 오늘도."',
  },
  {
    id: 2,
    title: "한강, <소년이 온다>",
    text: "네가 죽은 뒤 장례식을 치르지 못해, 내 삶이 장례식이 되었다.",
  },
  {
    id: 3,
    title: "김초엽, <우리가 빛의 속도로 갈 수 없다면>",
    text: "“우리는 점점 더 우주에 존재하는 외로움의 총합을 늘려갈 뿐인 게 아닌가”",
  },
];

const Book = () => {
  const { id } = useParams();
  const book = data[id - 1];
  return (
    <div>
      <div>{book.id}</div>
      <div>{book.title}</div>
      <div>{book.text}</div>
    </div>
  );
};

export default Book;
