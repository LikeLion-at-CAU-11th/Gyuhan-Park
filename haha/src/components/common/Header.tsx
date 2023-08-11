import React from "react";
import styled from "styled-components";

interface IHeader {
  modal: number;
  setModal: React.Dispatch<React.SetStateAction<number>>;
}

const Header = ({ modal, setModal }: IHeader) => {
  return (
    <MenuDom>
      <MenuButton onClick={() => setModal(0)} $clicked={modal === 0}>
        아기사자 정보
      </MenuButton>
      <MenuButton onClick={() => setModal(1)} $clicked={modal === 1}>
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
