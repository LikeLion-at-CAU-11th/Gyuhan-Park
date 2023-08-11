"use client";

import Header from "@/components/common/Header";
import LionTestModal from "@/components/liontest/LionTestModal";
import React from "react";
import styled from "styled-components";

const LionTestPage = () => {
  return (
    <ModalDom>
      <Header type="liontest" />
      <LionTestModal />
    </ModalDom>
  );
};

const ModalDom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LionTestPage;
