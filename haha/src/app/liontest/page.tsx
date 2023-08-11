"use client";

import LionTestModal from "@/components/liontest/LionTestModal";
import React from "react";
import styled from "styled-components";

const LionTestPage = () => {
  return (
    <ModalDom>
      <LionTestModal />
    </ModalDom>
  );
};

const ModalDom = styled.div`
  display: flex;
  justify-content: center;
`;

export default LionTestPage;
