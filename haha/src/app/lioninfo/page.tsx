"use client";

import LionInfoModal from "@/components/lioninfo/LionInfoModal";
import React from "react";
import styled from "styled-components";

const LionInfoPage = () => {
  return (
    <ModalDom>
      <LionInfoModal />
    </ModalDom>
  );
};

const ModalDom = styled.div`
  display: flex;
  justify-content: center;
`;

export default LionInfoPage;
