"use client";

import { getUserPerPage } from "@/apis/lioninfo";
import Header from "@/components/common/Header";
import LionInfoModal from "@/components/lioninfo/LionInfoModal";
import axios from "axios";
import { GetStaticProps, NextPageContext } from "next";
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
