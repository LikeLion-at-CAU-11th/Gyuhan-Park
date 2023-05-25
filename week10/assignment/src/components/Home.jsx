import React, { useState } from "react";
import styled from "styled-components";
import LionInfoModal from "./lioninfo/LionInfoModal";
import LionTestModal from "./liontest/LionTestModal";
import { Link } from "react-router-dom";

const Home = () => {
  const [modal, setModal] = useState(0);

  return (
    <AppDom>
      <MenuDom>
        <MenuButtonLink
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => setModal(0)}
          selected={modal === 0}
        >
          아기사자 정보
        </MenuButtonLink>
        <MenuButtonLink
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => setModal(1)}
          selected={modal === 1}
        >
          멋사인 테스트
        </MenuButtonLink>
      </MenuDom>
      <ModalDom>{modal === 0 ? <LionInfoModal /> : <LionTestModal />}</ModalDom>
    </AppDom>
  );
};

const AppDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const MenuButtonLink = styled(Link)`
  display: flex;
  width: 200px;
  height: 100px;
  border-radius: 20px;
  background-color: ${(props) => (props.selected ? "orange" : "gray")};
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

const ModalDom = styled.div`
  display: flex;
  justify-content: center;
`;

export default Home;
