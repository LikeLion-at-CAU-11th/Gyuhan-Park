"use client";

import Header from "@/components/common/Header";
import LionInfoModal from "@/components/lioninfo/LionInfoModal";
import React, { useEffect } from "react";
import styled from "styled-components";

const LionInfoPage = () => {
  return (
    <ModalDom>
      <Header type="lioninfo" />
      <LionInfoModal />
    </ModalDom>
  );
};

const ModalDom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LionInfoPage;
