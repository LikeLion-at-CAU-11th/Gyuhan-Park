"use client";

import Header from "@/components/common/Header";
import styled from "styled-components";

export default function Home() {
  return (
    <AppDom>
      <Header type="home" />
    </AppDom>
  );
}

const AppDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const ModalDom = styled.div`
  display: flex;
  justify-content: center;
`;
