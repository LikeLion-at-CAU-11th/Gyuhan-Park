import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styled from "styled-components";

interface IHeader {
  type: "lioninfo" | "liontest" | "home";
}

const Header = ({ type }: IHeader) => {
  const router = useRouter();

  const handleClickTab = (e: React.MouseEvent<HTMLDivElement>) => {
    const page = e.currentTarget.id;
    router.push(`/${page}`);
  };

  return (
    <MenuDom>
      <MenuButton id="lioninfo" onClick={handleClickTab} $clicked={type === "lioninfo"}>
        아기사자 정보
      </MenuButton>
      <MenuButton id="liontest" onClick={handleClickTab} $clicked={type === "liontest"}>
        멋사인 테스트
      </MenuButton>
    </MenuDom>
  );
};

interface IMenu {
  $clicked: boolean;
}

const MenuButton = styled.div<IMenu>`
  display: flex;
  width: 200px;
  height: 100px;
  border-radius: 20px;
  background-color: ${(props) => (props.$clicked ? "orange" : "gray")};
  color: white;
  font-size: 25px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MenuDom = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
`;

export default Header;
