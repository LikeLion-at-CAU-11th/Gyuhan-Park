"use client";

import { Wrapper, Title, Form, Inputs, Input, Button } from "@/components/Common";
import { useState } from "react";
import styled from "styled-components";
import LionInfoModal from "../components/lioninfo/LionInfoModal";
import LionTestModal from "../components/liontest/LionTestModal";

export default function Home() {
  const [modal, setModal] = useState(0);

  return (
    <AppDom>
      <MenuDom>
        <MenuButton onClick={() => setModal(0)} $clicked={modal === 0}>
          아기사자 정보
        </MenuButton>
        <MenuButton onClick={() => setModal(1)} $clicked={modal === 1}>
          멋사인 테스트
        </MenuButton>
      </MenuDom>
      <ModalDom>{modal === 0 ? <LionInfoModal /> : <LionTestModal />}</ModalDom>
    </AppDom>
  );
}

interface IMenu {
  $clicked: boolean;
}

const AppDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

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

const ModalDom = styled.div`
  display: flex;
  justify-content: center;
`;
