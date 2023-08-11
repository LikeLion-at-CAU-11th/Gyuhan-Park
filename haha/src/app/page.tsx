"use client";

import { Wrapper, Title, Form, Inputs, Input, Button } from "@/components/Common";
import Header from "@/components/common/Header";
import { useState } from "react";
import styled from "styled-components";
import LionInfoModal from "../components/lioninfo/LionInfoModal";
import LionTestModal from "../components/liontest/LionTestModal";

export default function Home() {
  const [modal, setModal] = useState(0);

  return (
    <AppDom>
      <Header modal={modal} setModal={setModal} />
      <ModalDom>{modal === 0 ? <LionInfoModal /> : <LionTestModal />}</ModalDom>
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
